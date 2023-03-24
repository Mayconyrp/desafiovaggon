import React from "react";
import styles from "../Card/CardTarefa.module.css"
export default function CardTarefa(props) {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>{props.nome}</h1>
            <p className={styles.cardCost}>{props.descricao}</p>
            <p className={styles.cardCost}>{props.datahorainicio}</p>
            <p className={styles.cardCost}>{props.datahorafim}</p>
            <p className={styles.cardCost}>{props.status}</p>
        </div>
    )
}
