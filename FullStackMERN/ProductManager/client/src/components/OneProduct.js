import React from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const OneProduct = () => {

    const { id } = useParams();

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
        .then(res => {
            console.log("Respones when requesting one product's info", res)
            setProductDetails(res.data.product)
        })
        .catch(err => console.log("Error getting one product info", err))
    })

    return (
        <div>
            <h3>Details about "{productDetails.title}"</h3>
            <p>ID: { id }</p>
            <p>Price: {productDetails.price}</p>
            <p>Description: {productDetails.description}</p>
        </div>
    )
}

export default OneProduct;