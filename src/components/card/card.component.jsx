import React from "react";

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h1 className> {props.monster.name} </h1>
        <h2>
            <p>
                {props.monster.email}
            </p>
        </h2>
    </div>
);