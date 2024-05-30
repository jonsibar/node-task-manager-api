const express = require('express');
const taskRoutes = express.Router();

const {
    createTask,
    getAllTasks,
    getTask
} = require('../controllers/task.controllers.js');


taskRoutes.route('/').post(createTask).get(getAllTasks)
taskRoutes.route('/:id').get(getTask)

module.exports = taskRoutes