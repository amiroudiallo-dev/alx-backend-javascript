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