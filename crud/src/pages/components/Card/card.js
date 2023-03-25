import React from "react";

export default function Card(props) {
    return (
        <div className="card--container">
            <h1 className="card--tile">{props.login}</h1>
            <p className="card--cost">{props.senha}</p>
        </div>
    )
}
        