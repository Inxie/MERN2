import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import Info from './components/Info';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Luke APIWalker</h1>
        <SearchForm></SearchForm>
        <Switch>
          <Route exact path = "/:category/:id">
            <Info></Info>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
