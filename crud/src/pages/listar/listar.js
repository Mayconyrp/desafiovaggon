import './Listar.module.css'
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import Card from '../Card/card';

const Listar = () => {

    const [listGames, setListGames] = useState()

    useEffect(() => {
        Axios.get("http://localhost:8080/listar").then((response) => {
            setListGames(response.data)
        })
    },[])

    return (
        <div>
            {listGames && listGames.map((value) => (
                <Card 
                    key={value.id}
                    listCard={listGames}
                    setListCard={setListGames}
                    id={value.id}
                    login={value.login}
                    senha={value.senha}
                />
            ))}
        </div>
    )
}

export default Listar;
