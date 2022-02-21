import React from 'react';
import './PokeCell.css';



export default function PokeCell({ pokeClass, handleOnClick}) {
  
    return (
            <button onClick={() => handleOnClick(pokeClass + 1)} className="container poke-cell">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeClass + 1}.png`} alt={pokeClass}></img>
            </button>
        
    );
}

