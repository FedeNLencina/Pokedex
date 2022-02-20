import React from 'react';
import './Pokedex.css'
import PokeList from '../PokeList/PokeList.js';
import DataView from '../DataView/DataView.js';
import PokeCell from '../PokeCell/PokeCell.js'
import Pokemon from '../Pokemon.js';


export default function Pokedex() {
  const handlerClick = (id) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
  .then(res => res.json())
  .then(data => {
    const pokemon = new Pokemon(data);
    return pokemon;
  })
  .catch(err => console.log(err));
  
}
  return (
    <div className="container-fluid bg-dark d-flex justify-content-center pokedexContainer">
      <div className="pokedex">
        <div className="row pokedex-row">
          <div className="col-lg-6 col-md-6 col-12 colIzq">
            <PokeList/>
          </div>
          <div className="col-lg-6 col-md-6 col-12 colDer">
            <DataView pokemon={handlerClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}
