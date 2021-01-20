import './styles/App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import BestCardContainer from './components/general/BestCardContainer/BestCardContainer';
import Footer from './components/general/Footer/Footer';

import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Checkout from "./components/Checkout/Checkout";
import DetailContainer from './components/Detail/DetailContainer';
import Error404 from "./components/general/Error404/Error404";


function App() {
  return (

    <BrowserRouter >

      <NavBar />
      <Hero />

      <Switch >
        <Route exact path="/" >
          <BestCardContainer />
        </Route>
        <Route exact path="/cart" >
          <Cart />
        </Route>
        <Route exact path="/category" >
          <Category />
        </Route>
        <Route exact path="/category/:category_name?" >
          <BestCardContainer />
        </Route>
        <Route exact path="/checkout" >
          <Checkout />
        </Route>
        <Route exact path="/detail/:id_curso?" >
          <DetailContainer />
        </Route>
        <Route path="*" >
          <Error404 />
        </Route>
        
      </Switch>

      <Footer leyenda="Dev Store - Copyright © 2020"/>
    
    </BrowserRouter>

  );
}

export default App;