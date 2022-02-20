import React from 'react';
import './DataView.css';

export default function DataView({ pokemon }) {
    const { id, name, sprite, type, height, weight } = pokemon;
    return (
        <div className="d-flex flex-column justify-content-around aling-items-center dataView col-lg-6 col-md-6 col-12">
            <img src={sprite} className="spriteImg" alt="sprite"></img>
            <div className ="dataWrapper">
                <h1 className="dataName">ID: {id} {name}</h1>
                <p className="dataChar">Type: {type}</p>
                <p className="dataChar">Height: {height}</p>
                <p className="dataChar">Weight: {weight}</p>
            </div>
        </div>
    );
}

