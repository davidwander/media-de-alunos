const students = [
  {
    name: "Dely",
    firstNote: 8,
    secundNote: 9,
  },
  {
    name: "João",
    firstNote: 3,
    secundNote: 2.5,
  },
  {
    name: "Marcos",
    firstNote: 9,
    secundNote: 7,
  },
  {
    name: "Rangel",
    firstNote: 7.5,
    secundNote: 6.5,
  }
]

function average(firstNote, secundNote) {
  return (firstNote + secundNote) / 2
}

function result(student) {
  return `
    A média do aluno ${student.name} foi de: ${average(student.firstNote, student.secundNote)}
  `
}

for(let student of students) {
  let resultFinal = result(student)

  let averageFinal = average(student.firstNote, student.secundNote)

  if (averageFinal >= 7){
    alert(`
      ${resultFinal}
      Parabéns você foi aprovado
      `)
  }else {
    alert(`
      ${resultFinal}
      Não foi dessa vez.
      `)
  }
}