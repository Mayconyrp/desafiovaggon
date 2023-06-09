import React, { useState } from 'react';
import Axios from "axios"
import { FormGroup, Input, Label, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Atividade = () => {
    const [values, setValues] = useState({
        nome: '',
        descricao:'',
        datahorainicio: '',
        datahorafim: '',
        status: ''
    });

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
        console.log(value.target.value);
    };

    const handleClickButton = () => {
        console.log(values)
        Axios.post("http://localhost:8080/atividade", {
            nome: values.nome,
            descricao: values.descricao,
            datahorainicio: values.datahorainicio,
            datahorafim: values.datahorafim,
            status: values.status,
        }
        ).then((resposta) => {
            console.log(resposta)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="App">
            <div className="containerCadastro">
                <h1 className='Cabecalho'>Cadastrar Atividades</h1>

                <FormGroup>
                    <Label for="nome">Nome da atividade</Label>
                    <Input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Insira o nome da atividade"
                        value={values.nome}
                        onChange={handleChangeValues}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="descricao">Descrição da atividade</Label>
                    <Input
                        type="textarea"
                        name="descricao"
                        id="descricao"
                        placeholder="Insira a descricao da atividade"
                        value={values.descricao}
                        onChange={handleChangeValues}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="datahorainicio">Data e hora de início</Label>
                    <Input
                        type="text"
                        name="datahorainicio"
                        id="datahorainicio"
                        placeholder="Insira a data e hora que você iniciou a atividade"
                        value={values.datahorainicio}
                        onChange={handleChangeValues}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="datahorafim">Data e hora de fim</Label>
                    <Input
                        type="text"
                        name="datahorafim"
                        id="datahorafim"
                        placeholder="Insira a data e hora que você finalizou a atividade"
                        value={values.datahorafim}
                        onChange={handleChangeValues}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="status">Status da atividade</Label>
                    <Input
                        type="select"
                        name="status"
                        id="status"
                        value={values.status}
                        onChange={handleChangeValues}>
                        <option value="">Selecione o status</option>
                        <option value="A fazer">A fazer</option>
                        <option value="Em andamento">Em andamento</option>
                        <option value="Concluída">Concluída</option>
                    </Input>
                </FormGroup>
                
                <Button color="info" block className="inputCadastro" onClick={() => handleClickButton()}>
                    Cadastrar
                </Button>
                <Link to={"/"}>
                    <Button color="danger" block>Voltar</Button>
                </Link>

            </div>
        </div>
    );
}

export default Atividade;


