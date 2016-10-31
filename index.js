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
  console.log(res[student])
})

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.select().from('students').where('id', id).asCallback(callback)
}

getStudentById(1, function(err, res){
  if (err) return console.log(err)
  console.log(res)
})

// //Update
function updateStudent(student, callback) {
  return knex('students').where({name: student.name}).update({cohort: student.cohort}).asCallback(callback)
}

updateStudent({name: 'katie', cohort: 'blah-2016'}, function(err, res){
  if (err) return console.log(err)
  console.log(res)
})
// // updateStudent works but console logs number 1, why??

// //Delete
function deleteStudentById(id, callback) {
  return knex('students').where('id', id).del().asCallback(callback)
}

deleteStudentById(2, function(err, res){
  if (err) return console.log(err)
  console.log(res)
})
//deleteStudent works but console logs a number? Why?

// Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})
