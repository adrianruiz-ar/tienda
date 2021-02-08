import './styles/App.css';

import { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from "./components/general/Header/Header";
import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import BestCardContainer from './components/general/BestCardContainer/BestCardContainer';
import Footer from './components/general/Footer/Footer';

import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Checkout from "./components/Checkout/Checkout";
import DetailContainer from './components/Detail/DetailContainer';
import Error404 from "./components/general/Error404/Error404";

import { Store } from "./store";



function App() {

  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })


  return (

    <Store.Provider value={[data, setData]}>

      <BrowserRouter >

        <Header />
        <NavBar />

        <Switch >

          <Route exact path="/" >
            <Hero />
            <BestCardContainer />
          </Route>
          <Route exact path="/cart" >
            <Cart />
          </Route>
          <Route exact path="/category" >
            <Category />
            <BestCardContainer />
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
    
    </Store.Provider>

  );
}

export default App;