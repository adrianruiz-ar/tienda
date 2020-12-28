import './styles/App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import BestCardContainer from './components/general/BestCardContainer/BestCardContainer';
import Footer from './components/general/Footer/Footer';

function App() {
  return (

    <BrowserRouter >

      <NavBar />
      <Hero />

      <Switch >
        <Route path="/" >
          <BestCardContainer />
        </Route>
        
      </Switch>

      <Footer leyenda="Dev Store - Copyright © 2020"/>
    
    </BrowserRouter>

  );
}

export default App;