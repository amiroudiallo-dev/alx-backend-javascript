/**
 * Retrieves ids from list of students.
 * @author DIALLO Amirou <https://github.com/amiroudiallo-dev>
 * @param {{id: number, firstName: string, location: string}[]} students.
 */
export default function getListStudentIds(students) {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.map((student) => student.id);
}
