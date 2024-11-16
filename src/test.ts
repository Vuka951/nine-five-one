import { isNineFiveOne, is951 } from './index';
import assert from 'assert';

// Test Suite
try {
  console.log("🛠️ Running tests for 'nine-five-one'...");

  // Default behavior (any type, any language)
  console.log('🔍 Testing default behavior...');
  assert.strictEqual(
    isNineFiveOne(951),
    true,
    '951 (number) should return true',
  );
  assert.strictEqual(
    isNineFiveOne('951'),
    true,
    "'951' (string) should return true",
  );
  assert.strictEqual(
    isNineFiveOne('ninefiveone'),
    true,
    "'ninefiveone' should return true",
  );
  assert.strictEqual(
    isNineFiveOne('devětpětjedna'),
    true,
    "'devětpětjedna' should return true",
  );

  // Tests for case and spacing variations
  console.log('🔍 Testing case and spacing variations...');
  assert.strictEqual(
    isNineFiveOne('Nine Five One'),
    true,
    "'Nine Five One' should return true",
  );
  assert.strictEqual(
    isNineFiveOne('nine five one'),
    true,
    "'nine five one' should return true",
  );
  assert.strictEqual(
    isNineFiveOne('NINEFIVEONE'),
    true,
    "'NINEFIVEONE' should return true",
  );
  assert.strictEqual(
    isNineFiveOne('Nine Five One', { language: 'eng' }),
    true,
    "'Nine Five One' in language 'eng' should return true",
  );

  // Specific type: string
  console.log('🔍 Testing type-specific behavior...');
  assert.strictEqual(
    isNineFiveOne(951, { type: 'string' }),
    false,
    "951 (number) should return false for type 'string'",
  );
  assert.strictEqual(
    isNineFiveOne('ninefiveone', { type: 'string' }),
    true,
    "'ninefiveone' (string) should return true for type 'string'",
  );

  // Specific language: czech
  console.log('🔍 Testing language-specific behavior...');
  assert.strictEqual(
    isNineFiveOne('devětpětjedna', { language: 'czech' }),
    true,
    "'devětpětjedna' should return true for language 'czech'",
  );
  assert.strictEqual(
    isNineFiveOne('ninefiveone', { language: 'czech' }),
    false,
    "'ninefiveone' should return false for language 'czech'",
  );

  // Alias usage
  console.log("🔍 Testing alias 'is951'...");
  assert.strictEqual(
    is951(951),
    true,
    'Alias is951 for 951 should return true',
  );

  console.log('🎉 All tests passed successfully!');
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error('❌ Test failed:', error.message);
  } else {
    console.error('❌ Test failed with an unknown error.');
  }
}
