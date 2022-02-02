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

        axios.post('http://localhost:8000/products', formInfoObj)
        .then(res => {
            console.log("This just posted", res)
            
            if(res.data.error) {
                setFormErrors(res.data.error.errors)
            }
        })
        
        .catch(err => console.log("Error on submit!", err))
    }

    return (
        <div>
            <h2>Product Form</h2>
            <form onSubmit={createSubmitHandler}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="number" onChange={(e)=>setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
                </p>
                <button type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default ProductForm;