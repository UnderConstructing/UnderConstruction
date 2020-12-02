module.exports = function (sequelize, DataTypes) {
    var contractorsdb = sequelize.define("contractorsdb", {
        company: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        con_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
        }
    })
    return contractorsdb
} 