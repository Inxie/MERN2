import logo from './logo.svg';
import './App.css';
import ProductForm from './components/ProductForm';
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
        <h2>Product Form</h2>
        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
