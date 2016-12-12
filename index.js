var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex
  .insert({
    name: 'Amy',
    cohort: 'piwakawaka-2016'
  })
  .into('students')
  .asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex ('students')
  .where('id', id)
  .asCallback(callback);
}

//Update
function updateStudent(student, callback) {
  return knex ('students')
  .where('id', '=', '6')
  .update({
    name: "Silly Sausage",
    cohort: "Chicken"
  })
  .asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  return knex ('students')
  .where('id', id)
  .delete()
  .asCallback(callback)
}

//*****CALL ALL FUNCTIONS**********//

//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})

//call the createStudent function
createStudent(function(err, res){
  if(err) return console.log(err)
  console.log(res)
})

//call the updateStudent function
updateStudent(function(err,res) {
  if(err) return console.log(err)
  console.log(res)
})

//call the get student by ID function
getStudentById('10', function(err, res){
  if(err) return console.log(err)
  console.log(res)
})

//call delete student by ID function
deleteStudentById('13', function(err, res){
  if(err) return console.log(err)
  console.log(res)
})
