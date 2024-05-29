const Task = require('../models/Task');

const createTask = (req,res) => {
    res.send('Task submitted')
}

module.exports = {
    createTask
};

