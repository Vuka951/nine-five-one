import SPELLINGS from "./helpers/spellings";

interface Options {
  type?: "string" | "number" | "any";
  language?: string;
}

export const isNineFiveOne = (val: unknown, options: Options = {}): boolean => {
  const { type = "any", language = "all" } = options;

  // Check type conditions
  if (type === "number" && typeof val !== "number") return false;
  if (type === "string" && typeof val !== "string") return false;

  // Normalize input value: remove spaces and convert to lowercase
  const normalizedVal = String(val).replace(/\s+/g, "").toLowerCase();

  // Check direct equality for number or string '951'
  if (normalizedVal === "951") return true;

  // Check spelling equality
  if (language === "all") {
    return Object.values(SPELLINGS).some(
      (spelling) => normalizedVal === spelling
    );
  } else if (SPELLINGS[language]) {
    return normalizedVal === SPELLINGS[language];
  }

  return false;
};

export const is951 = isNineFiveOne;
