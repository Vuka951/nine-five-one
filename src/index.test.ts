import { isNineFiveOne, is951 } from './index';

describe("Tests for 'nine-five-one'", () => {
  test('Default behavior: should return true for 951 (number)', () => {
    expect(isNineFiveOne(951)).toBe(true);
  });

  test("Default behavior: should return true for '951' (string)", () => {
    expect(isNineFiveOne('951')).toBe(true);
  });

  test("Default behavior: should return true for 'ninefiveone'", () => {
    expect(isNineFiveOne('ninefiveone')).toBe(true);
  });

  test("Default behavior: should return true for 'devětpětjedna'", () => {
    expect(isNineFiveOne('devětpětjedna')).toBe(true);
  });

  describe('Case and spacing variations', () => {
    test("should return true for 'Nine Five One'", () => {
      expect(isNineFiveOne('Nine Five One')).toBe(true);
    });

    test("should return true for 'nine five one'", () => {
      expect(isNineFiveOne('nine five one')).toBe(true);
    });

    test("should return true for 'NINEFIVEONE'", () => {
      expect(isNineFiveOne('NINEFIVEONE')).toBe(true);
    });

    test("should return true for 'Nine Five One' in language 'english'", () => {
      expect(isNineFiveOne('Nine Five One', { language: 'english' })).toBe(
        true,
      );
    });
  });

  describe('Type-specific behavior', () => {
    test("should return false for 951 (number) when type is 'string'", () => {
      expect(isNineFiveOne(951, { type: 'string' })).toBe(false);
    });

    test("should return true for 'ninefiveone' (string) when type is 'string'", () => {
      expect(isNineFiveOne('ninefiveone', { type: 'string' })).toBe(true);
    });
  });

  describe('Language-specific behavior', () => {
    test("should return true for 'devětpětjedna' in language 'czech'", () => {
      expect(isNineFiveOne('devětpětjedna', { language: 'czech' })).toBe(true);
    });

    test("should return false for 'ninefiveone' in language 'czech'", () => {
      expect(isNineFiveOne('ninefiveone', { language: 'czech' })).toBe(false);
    });
  });

  describe("Alias 'is951'", () => {
    test('should return true for 951', () => {
      expect(is951(951)).toBe(true);
    });
  });
});

import { getNineFiveOne, get951 } from './index';
import SPELLINGS from './helpers/spellings';

describe("Tests for 'getNineFiveOne'", () => {
  describe('Default behavior', () => {
    test('should return 951 as a number by default', () => {
      expect(getNineFiveOne()).toBe(951);
    });
  });

  describe('Type-specific behavior', () => {
    test("should return '951' as a string when type is 'string'", () => {
      expect(getNineFiveOne({ type: 'string' })).toBe('951');
    });

    test("should return 951 as a number when type is 'number'", () => {
      expect(getNineFiveOne({ type: 'number' })).toBe(951);
    });

    test("should return spelled-out version in English when type is 'spelled' with default language", () => {
      expect(getNineFiveOne({ type: 'spelled' })).toBe(SPELLINGS['english']);
    });

    test("should return spelled-out version when type is 'spelled' and language is 'english'", () => {
      expect(getNineFiveOne({ type: 'spelled', language: 'czech' })).toBe(
        SPELLINGS['czech'],
      );
    });

    test("should throw an error when type is 'spelled' and language is unsupported", () => {
      expect(() =>
        getNineFiveOne({ type: 'spelled', language: 'unsupported' }),
      ).toThrow('Unsupported language: unsupported');
    });
  });

  describe('Combination of type and language', () => {
    test("should return '951' as string in English", () => {
      expect(getNineFiveOne({ type: 'string', language: 'english' })).toBe(
        '951',
      );
    });

    test('should return 951 as number in Czech', () => {
      expect(getNineFiveOne({ type: 'number', language: 'czech' })).toBe(951);
    });
  });

  describe("Alias 'get951'", () => {
    test('should return 951 as a number by default', () => {
      expect(get951()).toBe(951);
    });

    test("should return '951' as a string when type is 'string'", () => {
      expect(get951({ type: 'string' })).toBe('951');
    });
  });
});
