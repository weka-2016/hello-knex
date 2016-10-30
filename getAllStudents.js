var Knex = require('knex')
var knexConfig = require('./knexfile.js').development;
var knex = Knex(knexConfig)

module.exports = getAllStudents

function getAllStudents() {
  return knex.select().table('students') 
}
