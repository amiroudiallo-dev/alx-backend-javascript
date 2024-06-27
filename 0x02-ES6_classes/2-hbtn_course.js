/**
 * Represents Holberton course.
 */
export default class HolbertonCourse {
  /**
   * create a new @see {@link HolbertonCourse}.
   * @param {String} name - name of the course.
   * @param {Number} length - number of the course.
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Return the name of the course.
   * @returns {@link name}
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   */
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new TypeError('Name must be a string.!');
    }
    this._name = value;
  }

  /**
   * return the length of the course.
   * @returns {@link length}
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   */
  set length(value) {
    if (typeof (value) !== 'number') {
      throw new TypeError('Length must be a number.!');
    }
    this._length = value;
  }

  /**
   * @returns {@link students}.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets students names.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
