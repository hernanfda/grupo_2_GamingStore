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
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_password: {
            type: DataTypes.TEXT,
            allowNull: false,

        },
        user_avatar: {
            type: DataTypes.TEXT,
            defaultValue: 'img-404',
        },
        user_profile_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false,
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.belongsTo(models.User_profiles, {
            as: "user_profile",
            foreignKey: "user_profile_id",
        });
    };

    return User;
};
