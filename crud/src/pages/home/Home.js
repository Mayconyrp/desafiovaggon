import { NavLink } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import React from 'react';

const Home = () => {
    return (
            <div>
                <nav className={styles.navbar}>
                    <NavLink to="/" end className={styles.brand}>
                        Desafio <span>MC²</span>
                    </NavLink>
                    <ul className={styles.links_list}>
                        <li>
                            <NavLink
                                to="/register"
                            >CadastrarUsuario 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/listar"
                            >Listar Usuarios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/atividade"
                            >Cadastrar Atividades 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/listartarefas"
                            >Listar Tarefas 
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <br></br>
                <h1>Bem vindo ao MC²BOOK!</h1>

            </div>
        )
}

export default Home