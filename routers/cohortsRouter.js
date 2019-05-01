const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

const router = express.Router();

router.post('/', (req, res) => {
    const cohort = req.body;
    console.log(req.body)
    db
    .insert(cohort)
    .into('cohorts')
    .then(cohort => {
        res.status(201).json(cohort)
    })
    .catch(err => {
        console.log(err)
        res.status(500).send('System could not add cohort')
    })
})

router.get('/', (req, res) => {
    console.log(req.body)
    db.select()
    .from('cohorts')
    .then(cohort => {
        res.status(201).json(cohort)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db.select()
    .from('cohorts')
    .where({id})
    .then(cohort => {
        res.status(201).json(cohort)
    })
})

// router.get('/:id/students', (req, res) => {
//     const {id} = req.params
//     db.select()
//     .from('students')
//     .where('cohort_id' == {id})
//     .then(cohort => {
//         res.status(201).json(cohort)
//     })
// })

router.put('/:id', (req, res) => {
    const {id} = req.params
    const changes = req.body
    db('cohorts')
    .where({id})
    .update(changes)
    .then(cohort => {
        res.status(201).json(cohort)
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params
    db('cohorts')
    .where({id})
    .del()
    .then(cohort => {
        res.status(201).json(cohort)
    })
})

module.exports = router;