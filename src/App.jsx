import './styles/App.css';

import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import BestCardContainer from './components/general/BestCardContainer/BestCardContainer';
import Footer from './components/general/Footer/Footer';

function App() {
  return (

    <>
      <NavBar />

      <Hero />

      <BestCardContainer />

      <Footer leyenda="Dev Store - Copyright © 2020"/>

    </>

  );
}

export default App;