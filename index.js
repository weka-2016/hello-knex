var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex.raw('INSERT INTO students (name, cohort) VALUES ("' + student.name + '", "' + student.cohort + '")').asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.raw('SELECT name, cohort FROM students WHERE id = ' + id).asCallback(callback)
}

//Update
function updateStudent(student, callback) {
  return knex('students').where('id', '=', student.id).update(student).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  return knex('students').where('id', '=', id).del().asCallback(callback)
}


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log(res)
})

function checkIfError(err, res){
  if(err) return console.log(err)
  console.log(res)
}
// createStudent({name: 'Guillermo', cohort: 'Kokako'}, checkIfError)


// updateStudent({id: 2, name: 'Rodrigo', cohort: 'Piwakawaka' }, checkIfError)

getStudentById(2, checkIfError)

deleteStudentById(2, checkIfError)

getAllStudents(checkIfError)
