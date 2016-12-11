var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  knex('students').insert({name: student.name, cohort: student.cohort}).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.select('*').from("students").where(knex.raw("id = ?", id)).asCallback(callback)
}

//Update
function updateStudent(studentID, update, callback) {
  return knex("students")
    .where(knex.raw("id = ?", studentID))
    .update(update)
    .asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {

}

//Update student
updateStudent(2, {name: "Mathieu"}, function(err, res){
  if(err) return console.log(err)
  console.log(res)
})

//Get student by id
// getStudentById(1, function(err, res){
//   if(err) return  console.log(err)
//   console.log(res)
// })

//Add a student
// createStudent({name: 'Bill', cohort: 'weka-2016'}, function (err, res){
//   if (err) return console.log(err)
//   console.log(res)
// })

//Let's try out the getAllStudents function.
// getAllStudents(function(err, res) {
//   if(err) return  console.log(err)
//   console.log(res)
//   knex.destroy()
// })
