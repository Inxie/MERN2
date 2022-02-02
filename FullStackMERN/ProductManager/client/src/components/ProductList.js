import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";

const ProductList = (props) => {

    let [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then(res => {
                console.log("Response when getting all products.", res)
                setProductList(res.data.product)
            })
            .catch(err => console.log("Error fetching all products!", err))
    })

    return (
        <div>
            <h2>List of Products</h2>

            {productList.map((productObj, i) => {
                return (
                    <div key={i}>
                        <h4>{productObj.title}</h4>
                        <p>{productObj.price}</p>
                        <p>{productObj.description}</p>
                        <p><Link to={`/products/${productObj._id}`}>Details</Link></p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;