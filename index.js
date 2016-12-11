var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex.raw('INSERT INTO students (name, cohort) VALUES ("Mischa", "weka-2016")').asCallback(callback);
  // console.log(student);


}

//Read
function getAllStudents(callback) {
  return knex.select().table('students').asCallback(callback)
}


function getStudentById(id, callback) {
  return knex.raw('SELECT name, cohort FROM students WHERE id = ?', [id]).asCallback(callback)

}

//Update
function updateStudent(student, callback) {
  return knex.select('student').where('name','=','Misha').update({name: 'Alice'}).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {

}


//Let's try out the getAllStudents function.
// getAllStudents(function(err, res) {
//   if(err) return  console.log(err)
//   console.log(res)
// })

// createStudent(function(err, res){
//   if (err) return console.log(err)
//   console.log(res);
// })

getStudentById(4, function(err, res){
  if (err) return console.log(err)
  console.log(res);
})



//  function checkForError(err, res){
//   if (err) return console.log(err)
//   console.log(res);
// })
