import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokemonAPI = () => {

    let [allPokemon, setAllPokemon] = useState([])

    const getPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(response => {
            return response.json()
        })
        .then(response => {
            setAllPokemon(response.results)
        })

        .catch(err =>{
            console.log("ERROR!", err)
        })
    }
        
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                allPokemon.map((pokeObj, i) => {
                    return (
                        <p>{pokeObj.name}</p>
                    )
                })
            }
        </div>
    )
}

export default PokemonAPI;