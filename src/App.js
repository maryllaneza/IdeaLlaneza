import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import NavBar from './components/NavBar';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./components/Cart";
import CartContext from './context/CartContext';
import ShopForm from './components/ShopForm';



function App() {
  return (
    <CartContext>
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>
         <Route path="/category/:category">
            <ItemListContainer/>
          </Route> 
          <Route path="/cart">
            <Cart/>
          </Route> 
          <Route path="/shop">
            <ShopForm/>
          </Route> 
      </Switch>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
