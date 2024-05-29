const express = require('express');
const taskRoutes = express.Router();

const {
    createTask
} = require('../controllers/task.controllers.js');


taskRoutes.route('/').post(createTask)

module.exports = taskRoutes