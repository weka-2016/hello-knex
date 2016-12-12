var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

// var studentName = students.name
// var studentCohort = students.cohort

//Create
function createStudent(student, callback) {

  return knex.raw('INSERT INTO students (name, cohort) VALUES (?, ?);', ['mix', 'birdcohort']).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.raw('SELECT*FROM students WHERE id=?;', [4]).asCallback(callback)
}

//Update
function updateStudent(student, callback) {
 return knex.raw('UPDATE students WHERE id=?;',[1]).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  // return knex('students')
  // .where (knex.raw('id=?', [10]))
  // .delete( response => {
  //   console.log(response)
  //   knex.destroy()
  return knex.raw('DELETE FROM students WHERE id=?;',[id]).asCallback(callback)
}

// deleteStudentById(6,function(err, res){
//   if(err) return console.log(err)
//   console.log(res)
// })

//Let's try out the getAllStudents function.

// createStudent({},function(err, res) {
//   if(err) return  console.log(err)
//
//   getAllStudents(function(err, res) {
//     if(err) return  console.log(err)
//     console.log(res)
//   })
// })
