import './App.css';
import React, {useState} from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import OneProduct from './components/OneProduct';

import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
            <hr />
            <ProductList></ProductList>
          </Route>

          <Route exact path="/products/:id">
            <OneProduct></OneProduct>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
