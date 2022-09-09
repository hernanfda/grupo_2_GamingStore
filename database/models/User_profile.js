module.exports = (sequelize, DataTypes) => {
    let alias = "User_profiles";
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
    const User_profile = sequelize.define(alias, cols, config);
    return User_profile;
};
