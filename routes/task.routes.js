const express = require('express');
const taskRoutes = express.Router();

const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/task.controllers.js');


taskRoutes.route('/').post(createTask).get(getAllTasks)
taskRoutes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = taskRoutes