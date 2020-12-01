
module.exports = function (sequelize, DataTypes) {
    var contractorsdb = sequelize.define("contractorsdb", {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        contractor_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return contractorsdb

} 