
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.integer('cohort_id').references('id').inTable('cohorts');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropIfTableExists('students');
};
