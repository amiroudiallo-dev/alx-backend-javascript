/**
 * Retrieves an array of students for a specific city with their new grade.
 * @param {{ id: number, firstName: string, location: string }[]} students.
 * @param {string} city.
 * @param {{ studentId: number, grade: number }[]} newGrades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
