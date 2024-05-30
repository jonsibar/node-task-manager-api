const { Task } = require('../models/');

const createTask = async (req,res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create task' });
    }
};

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.findAll({});
        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get all tasks' });
    }
};

const getTask = async (req,res) => {
    try {
        taskId = req.params.id
        const task = await Task.findAll({
            where: {
                id: taskId
            }
        });
        res.status(200).json({ task })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get task' });
    }
}


module.exports = {
    createTask,
    getAllTasks,
    getTask,
    // updateTask,
    // deleteTask
};