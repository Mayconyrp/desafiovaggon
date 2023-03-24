import './register.module.css'
import React, { useState } from 'react';
import Axios from "axios"


const Register = () => {

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
        Axios.post("http://localhost:8080/cadastro", {
            nome: values.nome,
            senha: values.senha,
        }
        ).then((resposta, nome, senha) => {
            console.log(resposta)
            console.log(nome)
            console.log(senha)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="App">
            <div className="containerCadastro">
                <h1 className='Cabecalho'>Teste</h1>
                <input type="text"
                    name="nome"
                    placeholder="Insira seu nome"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <input type="text"
                    name="senha"
                    placeholder="Insira sua senha"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <button className="inputCadastro"
                    onClick={() => handleClickButton()}
                >Cadastrar
                </button>

            </div>
        </div>

    )

}

export default Register;
