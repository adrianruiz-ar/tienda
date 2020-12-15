import './styles/App.css';

import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import BestCard from './components/general/BestCard/BestCard';
import Footer from './components/general/Footer/Footer';

function App() {
  return (

    <>
      <NavBar />

      <Hero />

      <BestCard />

      <Footer leyenda="Dev Store - Copyright © 2020"/>

    </>

  );
}

export default App;