import './App.css';
import Home from './components/WON';
import WON from './components/WON';
import React from "react";
import { useParams } from "react-router";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/:wordOrNumber">
            <WON></WON>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;