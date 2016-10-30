var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  knex.insert(student).into('students').asCallback(callback)
}

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

var myStudentArray = [{
  name: "Steve",
  cohort: "Piwakawaka-2016"
}, {
  name: "Mike",
  cohort: "Piwakawaka-2015"
}]

createStudent(myStudentArray, function(err, res){
  if (err) return console.log(err)
  console.log("Created Student",res)
})

getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})
