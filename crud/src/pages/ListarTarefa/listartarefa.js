import styles from "../ListarTarefa/ListarTarefa.module.css"
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import CardTarefa from '../Card/cardtarefa';

const ListarTarefa = () => {

    const [listGames, setListGames] = useState()

    useEffect(() => {
        Axios.get("http://localhost:8080/listartarefas").then((response) => {
            setListGames(response.data)
        })
    },[])

    return (
        <div className={styles.cardContainer}>
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
    )
}

export default ListarTarefa;
