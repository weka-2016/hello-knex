var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
//     // declare the student to be added
// var student = {name:'bobby',cohort:'weka-2010'}
//      // create the function to  insert the student
// function createStudent(student, callback) {
//   return knex('students').insert(student).asCallback(callback)
// }
//     // run the function
// createStudent(student,function(err, res) {
//   if(err) return  console.log(err)
//   console.log(res)
// })

//Read
    //get all the students
function getAllStudents(id,callback) {
  return knex.select('*').table('students').asCallback(callback)
}
//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})

var id = 3;
//Read
// function getStudentById(id, callback) {
//   // return knex.select().table('students').asCallback(callback)
//   knex.raw('SELECT * FROM students WHERE id = ?;', [id]).asCallback(callback)
// }
// //call the student by ID function
// getStudentById(id,function(err,res){
//     if(err) return  console.log(err)
//     console.log(res)
// })

//Update
// var studentName = "Bobby"
// function updateStudent(studentName, callback) {
//     knex.raw(`UPDATE students SET name = "${studentName}" WHERE id = 3;`).asCallback(callback)
// }
//
//
// updateStudent(studentName,function(err,res){
//   if(err) return  console.log(err)
//   console.log(res)
// })

//Delete
function deleteStudentById(id, callback) {
  return knex('students')
    .where('id',id)
    .del().asCallback(callback)
}

deleteStudentById(id,function(err,res){
      if(err) return  console.log(err)
      console.log(res)
})
