const { DataTypes } = require('sequelize');


const taskAttributes = {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
    type: DataTypes.ENUM,
    values: ['active', 'completed'],
    defaultValue: 'active',
    allowNull:false
    }
}

module.exports = taskAttributes