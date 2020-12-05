
module.exports = function (sequelize, DataTypes) {
    var financedb = sequelize.define("finance", {
        company: {
            type:DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            isEmail: true,
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
        },
        website: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return financedb

} 