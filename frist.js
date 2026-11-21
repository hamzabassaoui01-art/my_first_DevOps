
const students = [
  { name: "Hamza", note: 16 },
  { name: "Sara", note: 9 },
  { name: "Omar", note: 14 },
];

function getResult(note) {
  return note >= 10 ? "Admis" : "Non Admis";
}

function displayStudents(studentsList) {
  studentsList.forEach((student) => {
    const result = getResult(student.note);

    console.log(
      `Nom: ${student.name} | Note: ${student.note} | Résultat: ${result}`,
    );
  });
}

displayStudents(students);
