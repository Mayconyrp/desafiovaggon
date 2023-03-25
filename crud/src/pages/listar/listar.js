import './Listar.module.css'
import React, { useState, useEffect } from 'react';
import Axios from "axios"
import { Table, Button } from 'reactstrap';
import { Link } from "react-router-dom";


//import Card from '../components/Card/cardtarefa';

const Listar = () => {

    const [listUser, setListUser] = useState()

    useEffect(() => {
        Axios.get("http://localhost:8080/listar").then((response) => {
            setListUser(response.data)
        })
    }, [])
        return (
            <div>
                
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Login</th>
                            <th>Senha</th>
                         {/* nova coluna para os botões */}
                        </tr>
                    </thead>
                    <tbody>
                        {listUser && listUser.map((value, index) => (
                            <tr key={value.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{value.login}</td>
                                <td>{value.senha}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to={"/"}>
                    <Button color="info" block>Voltar</Button>
                </Link>
            </div>
        );
}

export default Listar;
