var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

//Create
function createStudent(student, callback) {
  return knex('students')
    .insert([{name: student.name,cohort: student.cohort}])
    .asCallback(callback)
}

//Read
function getAllStudents(callback) {
  return knex.select().from('students').asCallback(callback)
}

//Read
function getStudentById(id, callback) {
  return knex('students')
    .where('id',id)
    .select()
    .asCallback(callback)
}

//Update
function updateStudent(student, callback) {
  return knex.raw(`UPDATE students SET name='${student.name}' WHERE id=${student.id}`).asCallback(callback)
}

//Delete
function deleteStudentById(id, callback) {
  return knex('students')
    .where('id', id)
    .del()
    .asCallback(callback)
}

// createStudent FN
createStudent({name: "Gaby", cohort: "Piwakawaka-2016"}, function(err, res) {
  if(err) return console.log(err)
  console.log(res)
})
//
// getStudentById(2, function(err, res) {
//   if (err) return console.log(err)
//   console.log(res);
// })

// //UPDATE student
// updateStudent({id:15, name:'Jasmine'}, function(err, res) {
//   if(err) return console.log(err)
//   console.log("updateStudent",res)
// })

// //deleteStudentById
// deleteStudentById(14, function(err,res){
//   if (err) return console.log(err);
//   console.log("deleteStudentById",res);
// })


//Let's try out the getAllStudents function.
getAllStudents(function(err, res) {
  if(err) return  console.log(err)
  console.log("getAllStudents",res)
})
