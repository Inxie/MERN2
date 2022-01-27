import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const Info = () => {

    const {category, id} = useParams();

    let [details, setDetails] = useState({});

    useEffect( () => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(response => {
            setDetails(response.data);
        })
        .catch(err => console.log(err))
    }, [category, id])
    

    return (
        <div>
            {
                category === 'people'?
                <>
                    <h2>Name: {details.name}</h2>
                    <h4>Height: {details.height}</h4>
                    <h4>Mass: {details.mass}</h4>
                    <h4>Gender: {details.gender}</h4>
                </>

                : category === 'planets'?
                <>
                    <h2>Name: {details.name}</h2>
                    <h4>Climate: {details.climate}</h4>
                    <h4>Terrain: {details.terrain}</h4>
                    <h4>Population: {details.population}</h4>
                </>

                : category === "starships"?
                <>
                    <h2>Name: {details.name}</h2>
                    <h4>Model: {details.model}</h4>
                    <h4>Manufacturer: {details.manufacturer}</h4>
                    <h4>Crew: {details.crew}</h4>
                </>
                :
                <>
                    <h2>These are not the droids you're looking for.</h2>
                    <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960"></img>
                </>
            }
        </div>
    );
}

export default Info;