import React, { useState } from 'react';
import Axios from "axios"


const Atividade = () => {

    const [values, setValues] = useState();
    console.log(values)
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
        console.log(value.target.value);

    };

    const handleClickButton1 = () => {
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
                <input type="text"
                    name="nome"
                    placeholder="Insira o nome da atividade"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <input type="text"
                    name="descricao"
                    placeholder="Insira a descricao da atividade"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>
                
                <input type="text"
                    name="datahorainicio"
                    placeholder="Insira a data e hora que você iniciou a atividade"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <input type="text"
                    name="datahorafim"
                    placeholder="Insira a data e hora que você finalizou a atividade"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <input type="text"
                    name="status"
                    placeholder="Insira o status da atividade"
                    className="inputCadastro"
                    onChange={handleChangeValues}></input>

                <button className="inputCadastro"
                    onClick={() => handleClickButton1()}
                >Cadastrar
                </button>

            </div>
        </div>

    )

}

export default Atividade;
