// Types

/** Check whether a value is a string */
export const isStr = (value: unknown): value is string => typeof value === 'string';

/** Check whether a value is an array */
export const isArr = <T>(value: unknown): value is T[] => Array.isArray(value);

/** Check whether a value is an object */
export const isObj = <T>(value: unknown): value is T => typeof value === 'object';

/** Check whether a value is a number */
export const isBool = (value: unknown): value is boolean => typeof value === 'boolean';

/** Check whether a value is a number */
export const isNum = (value: unknown): value is number => typeof value === 'number';

/** Check whether a value is a number */
export const isFunc = <T>(value: unknown): value is T => typeof value === 'function';

/** Check whether the value is undefined */
export const isUndefined = <T>(value?: T): value is T => value === undefined;

/**
 * Check whether a value is of a specific type and do a safety check, to validate whether it's actually that type
 * @param value The value that you want to check
 * @param safetyCheck The check that the value actually is of that type
 */
export const isType = <T>(value: unknown, safetyCheck: ((value: T) => boolean) | boolean): value is T => {
  // If the safety check is a function.
  if (isFunc<(value: T) => boolean>(safetyCheck)) {
    return !!value && safetyCheck(value as T);
  }

  // If the safety check is a boolean
  return !!value && safetyCheck;
};

/** Check whether the varaible is not undefined */
export const notUndefined = <T>(value?: T): value is T => value !== undefined;

/** Check whether the varaible is not null */
export const notNull = <T>(value?: T): value is T => value !== null;

export const isJSON = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};
