/**
 * Creates a new @see interface represente a teacher.
 * @author amiroudiallo<https://github.com/amiroudiallo-dev>
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index:string]: any;
}

/**
 * Creates a new @see interface represente a director.
 * @author amiroudiallo<https://github.com/amiroudiallo-dev>
 */
export interface Director extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Creates a @see function which returns the first letter
 * of the firstName and the full lastName. 
 * @param firstName - the teacher firstname.
 * @param lastName - the teacher lastname.
 * @author amiroudiallo<https://github.com/amiroudiallo-dev>
 */
export function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}