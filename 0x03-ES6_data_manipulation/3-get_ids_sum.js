/**
 * Retrieves the sum of all the student ids.
 * @param {{ id: number, firstName: string, location: string }} students.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prevStudent, currentStudent) => prevStudent.id || prevStudent + currentStudent.id, 0);
  }
  return 0;
}
