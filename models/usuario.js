const Sequelize = require("sequelize")
const conexaodb = require("../database/db")

const Usuarios = conexaodb.define('Usuarios',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    login:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

Usuarios.sync()
module.exports = Usuarios