var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex.raw(`INSERT INTO students (name, cohort) VALUES ('${student.name}', '${student.cohort}')`).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.raw('SELECT * FROM students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.raw(`SELECT * FROM students WHERE id=${id}`).asCallback(callback)
}

//Update
function updateStudent(student, callback) {
  return knex.raw(`UPDATE students SET name='${student.name}' WHERE id=${student.id}`).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  return knex.raw(`DELETE FROM students WHERE id=${id}`).asCallback(callback)
}



// createStudent FN
createStudent({name: "Ursula", cohort: "Piwakawaka-2016"}, function(err, res) {
  if(err) return console.log(err)
  console.log(res)
})

getStudentById(2, function(err, res) {
  if (err) return console.log(err)
  console.log(res);
})

//UPDATE student
updateStudent({id:10, name:'Jasmine'}, function(err, res) {
  if(err) return console.log(err)
  console.log("updateStudent",res)
})

//deleteStudentById
deleteStudentById(11, function(err,res){
  if (err) return console.log(err);
  console.log("deleteStudentById",res);
})


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log("getAllStudents",res)
})
