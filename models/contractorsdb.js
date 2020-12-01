module.exports = function (sequelize, DataTypes) {
    var contractorsdb = sequelize.define("contractorsdb", {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        company: {
            type:DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull
        }
    })
    return contractorsdb
} 