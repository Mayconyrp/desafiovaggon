import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { FormGroup, Input, Label } from 'reactstrap';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Atividade = () => {
    const { id } = useParams();
    const [listAtv, setListAtv] = useState([]);
    const [values, setValues] = useState({
        nome: '',
        descricao: '',
        datahorainicio: '',
        datahorafim: '',
        status: ''
    });

    useEffect(() => {
        Axios.get("http://localhost:8080/listartarefas").then((response) => {
            setListAtv(response.data);
        });
    }, []);

    useEffect(() => {
        const atividade = listAtv.find((atividade) => atividade.id === parseInt(id));
        if (atividade) {
            setValues({
                nome: atividade.nome,
                descricao: atividade.descricao,
                datahorainicio: atividade.datahorainicio,
                datahorafim: atividade.datahorafim,
                status: atividade.status,
            });
        }
    }, [id, listAtv]);

    const handleChangeValues = (event) => {
        const { id, value } = event.target;
        setValues(prevValues => ({ ...prevValues, [id]: value }));
    };

    const handleClickButton = () => {
        Axios.put(`http://localhost:8080/atividade/${id}`, {
            nome: values.nome,
            descricao: values.descricao,
            datahorainicio: values.datahorainicio,
            datahorafim: values.datahorafim,
            status: values.status,
        })
            .then((response) => {
                console.log(response.data);
                // limpa os valores após a requisição ter sido feita com sucesso
                setValues({
                    nome: '',
                    descricao: '',
                    datahorainicio: '',
                    datahorafim: '',
                    status: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="Atualizar">
            <div className="containerCadastro">
                <h1 className='Cabecalho'>Atualizar Atividades</h1>

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



                <button className="inputCadastro" onClick={handleClickButton}>
                    Atualizar
                </button>
                <Link to={'/listartarefas'}>
                <button >Voltar</button>
                </Link>
            </div>
        </div>
    )
}

export default Atividade
