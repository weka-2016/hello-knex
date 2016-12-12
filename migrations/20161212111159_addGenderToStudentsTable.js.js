exports.up = function(knex, Promise) {
  return knex.schema.table('students', function (table) {
    table.string('gender');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('students', function (table) {
    table.dropColumn('gender');
  })
};
