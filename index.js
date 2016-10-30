var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

var studentEx = {
  name: "Damn Dante",
  cohort: "The Shadow Realm"
}

//Create
function createStudent(student, callback) {
  //return knex.raw(`INSERT INTO students(name, cohort) VALUES("${student.name}", "${student.cohort}")`).asCallback(callback)
  return knex('students').insert(student).asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex('students').where({id: id}).asCallback(callback);
}

//Update
function updateStudent(callback) {
  return knex('students').where('name','=','Harrison').update({name: "Harry"}).asCallback(callback)
}

//Delete
function deleteStudentById(callback) {
  return knex('students').where('cohort', '=','The Shadow Realm').del().asCallback(callback)
}

deleteStudentById(function(err,res) {
  if(err) console.log(err)
  console.log(res);
})

updateStudent(function(err,res) {
  if (err) console.log(err)
  console.log(res);
})

getStudentById('4', function(err, res) {
  if (err) return console.log(err)
  console.log(res)
})

createStudent(studentEx, function(err, res) {

  if (err) return console.log(err)
  getAllStudents(function(err, res) {
    if(err) return  console.log(err)
    console.log(res)
  })
})


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  //console.log(res)
})
