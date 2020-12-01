module.exports = function (sequelize, DataTypes) {
    var contractorsdb = sequelize.define("contractorsdb", {
        id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
<<<<<<< HEAD
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
=======
        contractor_name: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
>>>>>>> 20ce6d1033f49cd646d0b115fa392d71ad35c0ae
        }
    })
    return contractorsdb
} 