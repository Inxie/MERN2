import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';


const EditProduct = () => {

    const {id} = useParams();

    let [productInfo, setProductInfo] = useState({
        title:"",
        price:0,
        description:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}/edit`)
        .then(res => {
            console.log("This is the response", res)
            setProductInfo(res.data.product)
        })
        .catch(err => console.log("Error on getting data!", err))
    }, [])

    const history = useHistory();

    const changeHandler = (e) => {
        console.log("Change detected!")

        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const updateSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/products/${id}/edit`, productInfo)
        .then(res => {
            console.log("Response after edit request.", res)
            history.push("/")
        })
        .catch(err => console.log("Error updating the product", err))
    }

    return (
        <div>
            <h2>Edit the Product</h2>
            <form onSubmit={updateSubmitHandler}>
                <p>
                    <label>Title:</label><br/>
                    <input type="text" name="title" value={productInfo.title} onChange={changeHandler} />
                </p>
                <p>
                    <label>Price:</label><br/>
                    <input type="number" name="price" value={productInfo.price} onChange={changeHandler} />
                </p>
                <p>
                    <label>Description:</label><br/>
                    <input type="text" name="description" value={productInfo.description} onChange={changeHandler} />
                </p>
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default EditProduct;