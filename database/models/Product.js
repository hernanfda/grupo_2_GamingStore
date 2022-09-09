module.exports = (sequelize, DataTypes) => {
    let alias = "Products";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        model: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.MEDIUMINT,
        },
        image: {
            type: DataTypes.STRING,
        },
        offer: {
            type: DataTypes.TINYINT,
        },
        popular: {
            type: DataTypes.TINYINT,
        },
        description: {
            type: DataTypes.TEXT,
        },
        category_id: {
            type: DataTypes.INTEGER,
        },
        brand_id: {
            type: DataTypes.INTEGER,
        },
    };
    let config = {
        timestamps: false,
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Brands, {
            as: "brands",
            foreignKey: "brand_id",
        });
        Product.belongsTo(models.Categories, {
            as: "categories",
            foreignKey: "category_id",
        });
    };

    return Product;
};
