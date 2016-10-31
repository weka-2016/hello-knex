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
function getAllStudents() {
  return knex.select().table('students')
}

//Read
function getStudentById(id, callback) {
  return knex('students')
    .where('id', id).asCallback(callback)
}

getStudentById(3, logIt)

//Update
function updateStudent(student, callback) {
  knex('students')
    .where('id', student.id)
    .update({
      name: "Tree Man"
    }).asCallback(callback)
}

var myStudent = {id: 7}
updateStudent(myStudent, logIt)




//Delete
function deleteStudentById(id, callback) {
  knex('students')
    .where('id', id)
    .del().asCallback(callback)
}

deleteStudentById(8, logIt)

// This is a promise

getAllStudents()
  .then((result) => {
    console.log('the db', result)
  })
  .catch((error) => {
    console.log('the error', error)
  })

// This is a callback
function logIt (err, res) {
  if(err) return  console.log(err)
  console.log(res)
}
