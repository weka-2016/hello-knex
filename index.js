var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
    return knex('students').insert(student).asCallback(callback)
  // return knex.insert([{name: "Lucas"},  {cohort: "Weka 2016"}], 'id').into('students').asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex.select(id).table('students').asCallback(callback)

}

//Update
function updateStudent(student, callback) {

}

//Delete
function deleteStudentById(id, callback) {

}

//Let's try out the getAllStudents function.
// createStudent({name: 'Lucas', cohort: '2016'}, function (err, res){
//   if(err) return  console.log(err)
//   // console.log(res)
// })
// getAllStudents(function(err, res) {
//   if(err) return  console.log(err)
//   console.log(res)
// })
getStudentById(2, function (err,res){
  if(err) return console.log(err)
  console.log(res)
})
