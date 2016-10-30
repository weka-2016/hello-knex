var getAllStudents = require('./getAllStudents')

getAllStudents()
  .then(function(students) {
    console.log(students)
  })
  .catch(function(err) {
    console.log(err)
  })
