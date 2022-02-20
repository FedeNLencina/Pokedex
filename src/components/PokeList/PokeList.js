import React from 'react';
import { useEffect, useState } from 'react';
import './PokeList.css';
import PokeCell from '../PokeCell/PokeCell.js'

export default function PokeList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    const fetchData = async() =>{
      const response = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    }
  })

  return (
    <div className="d-flex flex-wrap justify-content-around aling-items-center poke-list col-lg-6 col-md-6 col-12">
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
        <PokeCell/>
    </div>
  )
}
