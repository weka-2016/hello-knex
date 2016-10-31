var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

var mel = {
  name: 'mel',
  cohort: 'piwakawaka-2016'
}

function createStudent(student, callback) {
  // return knex.raw(`INSERT INTO students(name, cohort) VALUES("${student.name}", "${student.cohort}")`).asCallback(callback)
  return knex('students').insert({name: student.name, cohort: student.cohort}).asCallback(callback)
}

createStudent(mel, function(err, res){
  if (err) return console.log(err)
  console.log(res)
})

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {

}

//Update
function updateStudent(student, callback) {

}

//Delete
function deleteStudentById(id, callback) {

}


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})
