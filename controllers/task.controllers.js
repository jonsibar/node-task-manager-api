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
        const taskId = req.params.id
        const task = await Task.findOne({
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

const updateTask = async (req,res) => {
    try {
        const taskId = req.params.id
        console.log("taskId update task= ", taskId)
        const task = await Task.findOne({
            where: {
                id: taskId
            }
        });
        await task.update(req.body);
        await task.save();
        res.status(200).json({ task })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to get task' });
    }
}

const deleteTask = async (req,res) => {
    try {
        const taskId = req.params.id
        console.log(taskId)
        const task = await Task.findOne({
            where: {
                id: taskId
            }
        });
        await task.destroy();
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
    updateTask,
    deleteTask
};