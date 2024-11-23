import SPELLINGS from './helpers/spellings';

interface Options {
  type?: 'any' | 'string' | 'number' | 'spelled';
  language?: string;
}

/**
 * Determines if a given value represents the number 951 based on specified options.
 *
 * @param val - The value to check.
 * @param options - Configuration options to refine the check.
 * @returns `true` if the value represents 951 based on the options; otherwise, `false`.
 */
export const isNineFiveOne = (val: unknown, options: Options = {}): boolean => {
  const { type = 'any', language = 'all' } = options;

  // Check type conditions
  if (type === 'number' && typeof val !== 'number') return false;
  if (type === 'string' && typeof val !== 'string') return false;

  // Normalize input value: remove spaces and convert to lowercase
  const normalizedVal = String(val).replace(/\s+/g, '').toLowerCase();

  // Check direct equality for number or string '951'
  if (normalizedVal === '951') return true;

  // Check spelling equality
  if (language === 'all') {
    return Object.values(SPELLINGS).some(
      (spelling) => normalizedVal === spelling,
    );
  } else if (SPELLINGS[language]) {
    return normalizedVal === SPELLINGS[language];
  }

  return false;
};

export const is951 = isNineFiveOne;

/**
 * Returns the value 951 based on the provided options.
 *
 * @param options - Determines the format of the returned value.
 * @returns 951 as a number, '951' as a string, or a spelled-out version based on language.
 */
export const getNineFiveOne = (
  options: Options = { type: 'number' },
): number | string => {
  const { type = 'number', language = 'english' } = options;

  switch (type) {
    case 'number':
      return 951;
    case 'string':
      return '951';
    case 'spelled':
      if (SPELLINGS[language]) {
        return SPELLINGS[language];
      } else {
        throw new Error(`Unsupported language: ${language}`);
      }
    default:
      return 951;
  }
};

export const get951 = getNineFiveOne;
