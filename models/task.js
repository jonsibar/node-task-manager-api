'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
const taskAttributes = require('./taskAttributes');


module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task.init(
    taskAttributes(DataTypes)
    // { 
    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    //   },
    // completed: {
    //     type: DataTypes.ENUM,
    //     values: ['active', 'completed'],
    //     defaultValue: 'active',
    //     allowNull: false
    //   }
    // }
    , 
    {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};