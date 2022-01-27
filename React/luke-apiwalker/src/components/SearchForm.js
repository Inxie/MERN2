import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SearchForm = () => {

    let [categories, setCategories] = useState([])

    let [selectCat, setSelectCat] = useState("people")
    let [id, setId] = useState(null)

    useEffect( () => {
        axios.get("https://swapi.dev/api/")
        .then(response => {
            console.log("Response: ", response)
            setCategories(Object.keys(response.data))
        })
        .catch(err => {
            console.log("Error: ", err)
        })
    }, [])

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/${selectCat}/${id}`)
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Search for:    </label>
                <select onChange = {(e) => {setSelectCat(e.target.value)}}>
                    {
                        categories.map( (cat, index) => {
                            return (
                                <option key = {index}>{cat}</option>
                            )
                        })
                    }
                </select>
                <br />
                <br />
                <label>ID:     </label>
                <input onChange = {(e) => {setId(e.target.value)}} type="number"></input>
                <br />
                <br />
                <input type="submit" value="Search"></input>
            </form>
        </div>
    );
}

export default SearchForm;