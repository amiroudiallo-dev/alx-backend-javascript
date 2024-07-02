/**
 * Retrieves students who are located in a specific city.
 * @param {{ id: number, firstName: string, location: string }[]} students.
 * @param {string} city.
 * @author <amiroudiallo.yw@gmail.com>::<https://github.com/amiroudiallo-dev>
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array && typeof city === 'string') {
    return students.filter((student) => student.location === city);
  }
  return [];
}
