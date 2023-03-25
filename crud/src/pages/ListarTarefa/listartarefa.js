//import styles from "../ListarTarefa/ListarTarefa.module.css" UTILIZADO PARA O ANTIGO VISUALIZADOR DE D
import { Table, Button } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { Link } from "react-router-dom";

//import CardTarefa from '../Card/cardtarefa';


const ListarTarefa = () => {

    const [listAtv, setListAtv] = useState()

    useEffect(() => {
        //rota para pegar dados de todas as tarefas no array
        Axios.get("http://localhost:8080/listartarefas").then((response) => {
            setListAtv(response.data)
        })
    }, [])
    const handleDelete = (id) => {
        Axios.delete(`http://localhost:8080/delete/${id}`).then(() => {
            // atualiza a lista de atividades após a exclusão
            Axios.get("http://localhost:8080/listartarefas").then((response) => {
                setListAtv(response.data)
            })
        })
    }

    return (
        <div>
            {/* ANTIGO VISUALIZADOR DE DADOS
            <div className=/{styles.cardContainer}>
                {listGames && listGames.map((value) => (
                    <CardTarefa
                        key={value.id}
                        listCard={listGames}
                        setListCard={setListGames}
                        id={value.id}
                        nome={value.nome}
                        descricao={value.descricao}
                        datahorainicio={value.datahorainicio}
                        datahorafim={value.datahorafim}
                        status={value.status}
                    />
                ))}
            </div>
            */}

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Data/Hora Início</th>
                        <th>Data/Hora Fim</th>
                        <th>Status</th>
                        <th>Ações</th> {/* nova coluna para os botões */}
                    </tr>
                </thead>
                <tbody>
                    {listAtv && listAtv.map((value, index) => (
                        <tr key={value.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{value.nome}</td>
                            <td>{value.descricao}</td>
                            <td>{value.datahorainicio}</td>
                            <td>{value.datahorafim}</td>
                            <td>{value.status}</td>
                            <td>
                                <Link to={`/update/${value.id}`}>
                                    <Button color="info" block>Editar</Button>
                                </Link>
                                <Button color="danger" block onClick={() => handleDelete(value.id)}>Deletar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to={"/"}>
                    <Button color="danger" block>Voltar</Button>
                </Link>

        </div>
    );
};
export default ListarTarefa;
