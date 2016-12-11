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

var id = 1;
//Read
function getStudentById(id, callback) {
// return knex.select().table('students').asCallback(callback)
knex.raw('SELECT * FROM students WHERE id = ?;', [id]).asCallback(callback)
}
//call the student by ID function
getStudentById(id,function(err,res){
  if(err) return  console.log(err)
  console.log(res)
})

//Update ...not working
var newStudent = "hector,weka-2010"
function updateStudent(newStudent, callback) {
knex.raw('INSERT INTO students (name, cohort)VALUES ('+newStudent+');')
}

updateStudent(newStudent,function(err,res){
  if(err) return  console.log(err)
  console.log(res)
})

//Delete
function deleteStudentById(id, callback) {

}


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})
