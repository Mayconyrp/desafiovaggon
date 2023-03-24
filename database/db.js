const { Sequelize } = require("sequelize")
const sequelize = require("sequelize")

const conexaodb = new Sequelize('seletiva','root','maycon',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = conexaodb