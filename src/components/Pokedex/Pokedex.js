import React from 'react';
import './Pokedex.css'
import PokeList from '../PokeList/PokeList.js';



export default function Pokedex() {
  return (
    <div className="container-fluid bg-dark d-flex justify-content-center pokedexContainer">
      <div className="pokedex">
        <div className="row pokedex-row">
          <div className="col-lg-6 col-md-6 col-12 colIzq">
            <PokeList/>
          </div>
        </div>
      </div>
    </div>
  )
}
