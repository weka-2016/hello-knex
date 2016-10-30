var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

var myStudentArray = [{
  name: "Steve",
  cohort: "Piwakawaka-2016"
}, {
  name: "Mike",
  cohort: "Piwakawaka-2015"
}]

//Create
function createStudent(student, callback) {
  knex.insert(student).into('students').asCallback(callback)
}

// createStudent(myStudentArray, (err, res) => {
//   if (err) return console.log(err)
//   console.log("Created Student",res)
// })

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex('students').where('id', id).asCallback(callback)
}

getStudentById(3, (err, res) => {
  console.log('The student of the above ID', res);
})

//Update
function updateStudent(student, callback) {

}

//Delete
function deleteStudentById(id, callback) {

}

getAllStudents((err, res) => {
  if(err) return  console.log(err)
  console.log(res)
})
