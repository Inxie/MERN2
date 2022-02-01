import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const ProductForm = (props) => {
    let [title, setTitle] = useState("");
    let [price, setPrice] = useState(0);
    let [description, setDescription] = useState("");

    const history = useHistory();

    let [formErrors, setFormErrors] = useState({})

    const createSubmitHandler = (e) => {
        e.preventDefault();

        let formInfoObj = {title, price, description};

        axios.post('http://localhost:8000/api/products', formInfoObj)
        .then(res => {
            console.log("Response after posting", res)

            if(res.data.error) {
                setFormErrors(res.data.error.errors)
            }
            else {
                props.setNewProductAdded(!props.newProductAdded)
            }
        })

        .catch(err => console.log("Error on submit!", err))
    }

    return (
        <div>
            <form onSubmit={createSubmitHandler}>
            <p>
                <label>Title:</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price:</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description:</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"></input>
            </form>
        </div>
    )
}

export default ProductForm;