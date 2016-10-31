var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex('students').insert({name: student.name, cohort: student.cohort}).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().from('students')
}

//Read
function getStudentById(id, callback) {
  return knex('students').where('id', id)
}

//Update
function updateStudent(student, callback) {
  return knex('students').where('id', student.id).update(student).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
 return knex('students').where('id', id).del().asCallback(callback)
}

var ron = {
  name: 'ron',
  cohort: 'piwakawaka'
}

//Let's try out the getAllStudents function.
// getAllStudents()
//   .then(function(students){
//     console.log(students)
//   })
//   .catch(function(error){
//     console.log(error)
//   })

getStudentById(2)
  .then(function(students){
    console.log(students)
  })
  .catch(function(error){
    console.log(error);
  })

// createStudent(ron, function(err, res) {
//   if(err) return console.log(err)
//   console.log(res);
// })

// deleteStudentById(5, function(err, res) {
//   if(err) return console.log(err)
//   console.log(res)
// })

updateStudent({id:2, name:'sarah', cohort:'kia', grad:'december'}, function(err, res) {
  if(err) return console.log(err)
  console.log(res)
})
