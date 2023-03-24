const Sequelize = require("sequelize");
const conexaodb = require("../database/db");

const Cadastro = conexaodb.define('cadastrousuario',{
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
});

Cadastro.sync({ force: true }).then(() => {
  console.log('Tabela criada com sucesso!');
}).catch((error) => {
  console.log('Erro ao criar a tabela:', error);
});

module.exports = Cadastro;
