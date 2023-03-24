const bodyParser = require("body-parser")
const express = require("express")
const app = express()
const cors = require("cors")
// Import BD
const conexaodb = require("./database/db")
const Usuario = require("./models/usuario")
const Atividades = require("./models/atividade")
const Cadastro = require("./models/registrousuario")

// view engine
app.set('view engine', 'ejs')
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//static
app.use(express.static('public'))
app.use(cors())
app.use(express.json())
//Conexao c banco de dados
conexaodb
    .authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })



app.get("/", (req, res) => {
    res.render("index")

})

app.post("/atividade", (req, res) => {
    const { nome } = req.body
    const { descricao } = req.body
    const { datahorainicio } = req.body
    const { datahorafim } = req.body
    const { status } = req.body

    console.log(nome)
    console.log(descricao)
    console.log(datahorainicio)
    console.log(datahorafim)
    console.log(status)

    Atividades.create({
        nome:nome,
        descricao:descricao, 
        datahorainicio:datahorainicio,
        datahorafim:datahorafim, 
        status:status
    }).then((enviaratividade) => {
        res.send('cadastro de atividades efetuado!' + enviaratividade)
    })

})
/*
app.post("/cadastro", (req, res) => {
    const { nome } = req.body
    const { senha } = req.body
    console.log(nome)
    console.log(senha)

    Usuario.create({
        login: nome,
        senha: senha,
    })

})
*/
app.get("/listar", (req, res) => {
    Usuario.findAll({
    }).then((usuarios) => {
       // console.log(usuarios.map(usuarios => usuarios.toJSON()))
        res.send(usuarios)
    }).catch((error) => {
        console.log(error)
    })
})

app.get("/listartarefas", (req, res) => {
    Atividades.findAll({
    }).then((tarefas) => {
       // console.log(usuarios.map(usuarios => usuarios.toJSON()))
        res.send(tarefas)
    }).catch((error) => {
        console.log(error)
    })
})











//Porta do servidor
app.listen(8080, () => {
    console.log("Aplicação on-line!")
})      