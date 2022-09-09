module.exports = (sequelize, DataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        birth_date: {
            type: DataTypes.DATE,
        },
        password: {
            type: DataTypes.TEXT,
        },
        user_avatar: {
            type: DataTypes.TEXT,
        },
        user_profile_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);
    return User;
};
