import './register.module.css'
import React, { useState } from 'react';
import Axios from "axios"
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from "react-router-dom";



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
    /* Base de um FRONT P CADASTRO*/
    return (
        <div className="App">
            <div className="containerCadastro">
                <h1 className='Cabecalho'>Cadastro</h1>
                <Form>
                    <FormGroup>
                        <Label for="nome">Nome:</Label>
                        <Input type="text"
                            name="nome"
                            id="nome"
                            onChange={handleChangeValues} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Senha:</Label>
                        <Input type="password"
                            name="senha"
                            id="senha"
                            onChange={handleChangeValues} />
                    </FormGroup>
                    <Button color="primary" block onClick={() => handleClickButton()}>Cadastrar</Button>
                    <Link to={"/"}>
                    <Button color="danger" block>Voltar</Button>
                </Link>

                </Form>
            </div>
        </div>
    );



}

export default Register;
