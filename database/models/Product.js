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
            defaultValue: 'S/M'
            // allowNull: false,
        },
        price: {
            type: DataTypes.MEDIUMINT,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'img-404',
        },
        offer: {
            type: DataTypes.TINYINT,
        },
        popular: {
            type: DataTypes.TINYINT,
        },
        description: {
            type: DataTypes.TEXT,
            defaultValue: 'without description',
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
