# nine-five-one

A simple utility package for checking if a value matches `951`. The primary feature of this repository is its automated publishing workflow to NPM via GitHub Actions, triggered by pushing version tags.

---

## Related Video

Watch the tutorial on how to create and publish an NPM package with GitHub Actions here:  
[![YouTube Video](https://img.youtube.com/vi/JKQJShP2ngI/0.jpg)](https://www.youtube.com/watch?v=JKQJShP2ngI&ab_channel=Vuka)

This video explains how to set up the automated publishing process demonstrated in this repository.

---

## Features

- **Value Checking**: Verify if a given value matches `951`.
- **Automated Publishing**: Uses GitHub Actions to publish the package to NPM when a version tag is pushed.
- **Future-Proofing**: Includes a `.gitignore` for common npm artifacts like `node_modules`.

---

## Installation

Install the package via npm:

```bash
npm install nine-five-one
```

---

## Usage

Here's an example of how to use the package:

```javascript
const nineFiveOne = require('nine-five-one');

console.log(nineFiveOne(951)); // true
console.log(nineFiveOne(123)); // false
```

---

### Automation
The repository includes a **GitHub Actions workflow** that automates the publishing process:
1. When you push a **new version tag** (e.g., `v1.0.0`) to the repository:
   - The workflow automatically publishes the package to the NPM registry.
2. You no longer need to manually publish the package.

---

## About the `.gitignore`

The `.gitignore` file in this repository excludes:
- **`node_modules`**: Ensures that locally installed dependencies are not committed to the repository.
- While this package does not include dependencies at the moment, it is included for **future-proofing**, as most projects generate `node_modules` or other temporary files.

---

## Acknowledgments

Thanks for checking out **nine-five-one**! 🎉
