var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  knex.raw(`Insert into students ('name', 'cohort') values ('${student.name}','${student.cohort}')`).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.select().from('students').where('id', id).asCallback(callback)

}

//Update
function updateStudent(student, callback) {

}

//Delete
function deleteStudentById(id, callback) {

}


//Let's try out the getAllStudents function.
// getAllStudents(function(err, res) {
//   if(err) return  console.log(err)
//   console.log(res)
// })

// createStudent({name:"Jasmine", cohort:"Piwakawaka-2016"}, function(err,res){
//   if(err) return console.log(err)
//   console.log(res)
// })  WORKING!

getStudentById(1, function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})
