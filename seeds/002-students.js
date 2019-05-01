
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Jill Yenner', cohort_id: 1},
        {name: 'Mark Thomas', cohort_id: 2},
        {name: 'Gary Torry', cohort_id: 3}
      ]);
    });
};
