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

    test("should return true for 'Nine Five One' in language 'eng'", () => {
      expect(isNineFiveOne('Nine Five One', { language: 'eng' })).toBe(true);
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
