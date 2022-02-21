import React, {Component} from 'react';
import './Pokedex.css'
import PokeList from '../PokeList/PokeList.js';
import DataView from '../DataView/DataView.js';
import Pokemon from '../Pokemon.js';
class Pokedex extends Component {
    constructor() {
      super()
      this.state = {
        pokemon: {
          id: 1,
          name: "bulbasaur",
          height: 7,
          weight: 69,
          type: "grass",
          sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        }
      }
  
      this.handleOnClick = this.handleOnClick.bind(this)
    }
  
    handleOnClick(id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data => {
          const pokemon = new Pokemon(data);
          this.setState({ pokemon });
        })
        .catch(err => console.log(err));
    }
  render() {
  
  return (
    <div className="container-fluid bg-dark d-flex justify-content-center pokedexContainer">
      <div className="pokedex">
        <div className="row pokedex-row">
          <div className="col-lg-6 col-md-6 col-12 colIzq">
            <PokeList handleOnClick={this.handleOnClick}/>
          </div>
          <div className="col-lg-6 col-md-6 col-12 colDer">
            <DataView pokemon={this.state.pokemon}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

  export default Pokedex;
