/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */

/**
 * New Password Requirements:
 * {@description confirmed via regexr.com}
 * - 6 chars TOTAL
 * - 1 Uppercase
 * - 1 Lowercase
 * - 1 Number
 * - 1 Special Symbol
 * - Some symbols & white space are not alloawd
 */

// export const MAX_PWD_LENGTH = 6;

export const newPasswordRegex = new RegExp(/^((?!.*[\s\t\n\r\\\/])(?=.*\d{1,})(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*[`~!@#$%^&*()+=_-]+)).{6,}$/);

export const validPassword = (pattern: RegExp, password: string): boolean => {
  return pattern.test(password);
}