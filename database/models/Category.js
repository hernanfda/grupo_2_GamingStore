module.exports = (sequelize, DataTypes) => {
    let alias = "Categories";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    };
    let config = {
        timestamps: false,
    };
    const Category = sequelize.define(alias, cols, config);
    return Category;
};
