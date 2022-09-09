module.exports = (sequelize, DataTypes) => {
    let alias = "Brands";
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
    const Brand = sequelize.define(alias, cols, config);
    return Brand;
};
