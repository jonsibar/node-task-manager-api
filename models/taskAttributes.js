module.exports = (DataTypes) => ({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.ENUM,
        values: ['active', 'completed'],
        defaultValue: 'active',
    }
});
