const { execSync } = require('child_process');
const inquirer = require('inquirer'); // For select menu and changelog input
const fs = require('fs');

// Helper function to run commands and handle errors
function runCommand(command, errorMessage) {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`❌ ${errorMessage}`);
    throw new Error(errorMessage);
  }
}

// Function to bump the version
function bumpVersion(currentVersion, bumpType) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  switch (bumpType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    case 'patch':
      return `${major}.${minor}.${patch + 1}`;
    default:
      throw new Error('Invalid version bump type');
  }
}

// Function to update the changelog
function updateChangelog(version, message) {
  const changelogPath = './CHANGELOG.md';
  const changelogContent = fs.readFileSync(changelogPath, 'utf-8');
  const releaseDate = new Date().toISOString().split('T')[0];

  const newChangelogEntry = `## [${version}] - ${releaseDate}\n### Added\n- ${message}`;

  const updatedContent = changelogContent.replace(
    '## [Unreleased]',
    `## [Unreleased]\n\n${newChangelogEntry}`,
  );

  fs.writeFileSync(changelogPath, updatedContent);
  console.log(`✅ Updated CHANGELOG.md with version ${version}`);
}

// Function to revert changes to package.json, package-lock.json, and changelog
function revertChanges(originalVersion) {
  const packageJsonPath = './package.json';

  // Restore original version in package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  packageJson.version = originalVersion;
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n',
  );
  console.log(`🔄 Reverted version in package.json to ${originalVersion}`);

  // Run npm install to regenerate package-lock.json
  console.log('🔄 Reverting package-lock.json...');
  runCommand('npm install', 'Failed to revert package-lock.json.');

  // Revert changelog
  console.log('🔄 Reverting CHANGELOG.md...');
  execSync('git checkout -- CHANGELOG.md');
}

// Function to delete the created Git tag
function deleteGitTag(tag) {
  console.log(`🔄 Deleting Git tag ${tag}...`);
  runCommand(`git tag -d ${tag}`, `Failed to delete Git tag ${tag}`);
  runCommand(
    `git push origin :refs/tags/${tag}`,
    `Failed to delete remote Git tag ${tag}`,
  );
}

// Main function
async function main() {
  console.log('🚀 Preparing release...');

  // Step 1: Read the current version from package.json
  const packageJsonPath = './package.json';
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  const currentVersion = packageJson.version;

  console.log(`📦 Current version: ${currentVersion}`);

  // Step 2: Ask the user for the version bump type
  const { bumpType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'bumpType',
      message: 'Select version bump:',
      choices: [
        { name: 'Patch (e.g., 1.0.0 → 1.0.1)', value: 'patch' },
        { name: 'Minor (e.g., 1.0.0 → 1.1.0)', value: 'minor' },
        { name: 'Major (e.g., 1.0.0 → 2.0.0)', value: 'major' },
      ],
    },
  ]);

  // Step 3: Ask the user for the changelog message
  const { changelogMessage } = await inquirer.prompt([
    {
      type: 'input',
      name: 'changelogMessage',
      message: 'Enter a changelog message for this release:',
    },
  ]);

  // Step 4: Calculate the new version
  const newVersion = bumpVersion(currentVersion, bumpType);
  let createdTag = false;

  try {
    // Step 5: Run lint, test, and build
    console.log('🔍 Running lint, test, and build...');
    runCommand('npm run lint', 'Linting failed.');
    runCommand('npm run test', 'Tests failed.');
    runCommand('npm run build', 'Build failed.');

    // Step 6: Update package.json version
    console.log(`📦 Updating version to ${newVersion}...`);
    packageJson.version = newVersion;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );

    // Step 7: Update package-lock.json by running `npm install`
    console.log('📦 Updating package-lock.json...');
    runCommand('npm install', 'Failed to update package-lock.json.');

    // Step 8: Update the changelog
    updateChangelog(newVersion, changelogMessage);

    // Step 9: Commit changes
    console.log('📤 Staging changes...');
    runCommand(
      'git add package.json package-lock.json CHANGELOG.md',
      'Failed to stage changes.',
    );
    runCommand(
      `git commit -m "chore: bump version to ${newVersion}"`,
      'Failed to commit changes.',
    );

    // Step 10: Create a new tag
    const tagName = `v${newVersion}`;
    console.log(`🏷 Creating new tag ${tagName}...`);
    runCommand(`git tag ${tagName}`, 'Failed to create a Git tag.');
    createdTag = tagName;

    // Step 11: Push changes and tag
    console.log('📤 Pushing changes and tags...');
    runCommand('git push', 'Failed to push changes.');
    runCommand('git push --tags', 'Failed to push tags.');

    console.log('🎉 Release preparation completed successfully!');
  } catch (error) {
    console.error(
      '❌ An error occurred during the release process:',
      error.message,
    );

    // Revert changes if any step fails
    if (createdTag) {
      deleteGitTag(createdTag);
    }
    revertChanges(currentVersion);

    process.exit(1);
  }
}

main();
