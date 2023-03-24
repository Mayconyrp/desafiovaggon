const Sequelize = require("sequelize")
const conexaodb = require("../database/db")

const Atividades = conexaodb.define('atividades',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    descricao:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    datahorainicio:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    datahorafim:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    status:{
        type:Sequelize.STRING,
        allowNull:false,
    }


})

Atividades.sync()
module.exports = Atividades