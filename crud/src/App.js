import './App.css';
//import React, { useState } from 'react';
//import Axios from "axios"
import {BrowserRouter, Routes, Route,} from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/register"
import Login from "./pages/login/login"
import Navbar from "./pages/navbar/navbar"
import Listar from "./pages/listar/listar"
import Atividade from './pages/atividade/atividade';
import ListarTarefa from './pages/ListarTarefa/listartarefa';

function App (props) {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/navbar" element={<Navbar/>}></Route>
            <Route path="/listar" element={<Listar/>}></Route>
            <Route path="/atividade" element={<Atividade/>}></Route>
            <Route path="/listartarefas" element={<ListarTarefa/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App;

/*
  const [values, setValues] = useState();
  console.log(values)
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }))
    console.log(value.target.value);
  };
  
  const handleClickButton = () => {
    console.log(values)
    Axios.post("http://localhost:8080/cadastro",{
      nome: values.nome,
      senha: values.senha,
    }
    ).then((resposta,nome,senha) => {
      console.log(resposta)
      console.log(nome)
      console.log(senha)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Form className='forms'>
    <FormGroup floating>
      <Input
        type="text" 
        name="nome" 
        placeholder="Insira seu nome"
        className="inputCadastro"
        onChange={handleChangeValues}
      />
      <Label for="exampleNome">
        Nome
      </Label>
    </FormGroup>
    <FormGroup floating>
      <Input
        type="text"
        name="senha"
        placeholder="Insira sua senha"
        className="inputCadastro"
        onChange={handleChangeValues}
      />
      <Label for="examplePassword">
        Senha
      </Label>
    </FormGroup>
    <Button color="danger" className="inputCadastro"
        onClick={() => handleClickButton()}
        >Cadastrar
        </Button>  </Form>
  )
*/
