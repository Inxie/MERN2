import React, { useState } from 'react';
import axios from 'axios';

const PokemonAPI = () => {

    let [allPokemon, setAllPokemon] = useState([])

    const getPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
        .then(response => {
            setAllPokemon(response.data.results)
        })

        .catch(err => {
            console.log("ERROR!", err)
        })
    }
        
    return (
        <div>
            <button onClick={getPokemon}>Fetch Pokemon</button>
            {
                allPokemon.map((pokeObj, i) => {
                    return (
                        <div key = {i}>
                            <p>{pokeObj.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PokemonAPI;