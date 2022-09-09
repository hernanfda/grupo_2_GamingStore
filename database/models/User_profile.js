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

    User_profile.associate = (models) => {
        User_profile.hasMany(models.Users, {
            as: "users",
            foreignKey: "user_profile_id",
        });
    };

    return User_profile;
};
