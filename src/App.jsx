import './styles/App.css';

import NavBar from './components/general/NavBar/NavBar';
import Hero from './components/Home/Hero';
import ProductCard from './components/general/ProductCard/ProductCard';
import Footer from './components/general/Footer/Footer';

function App() {
  return (

    <>
      <NavBar />

      <Hero />

      <ProductCard titulo="HTML 5" precio="550"/>
      <ProductCard titulo="CSS 3" precio="650"/>
      <ProductCard titulo="JAVASCRIPT" precio="850"/>
      <ProductCard titulo="REACT JS" precio="1050"/>

      <Footer leyenda="Dev Store - Copyright © 2020"/>

    </>

  );
}

export default App;