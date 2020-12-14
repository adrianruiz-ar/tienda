import './styles/App.css';
import Hero from './components/Home/Hero';
import Footer from './components/general/Footer/Footer';
import NavBar from './components/general/NavBar/NavBar';

function App() {
  return (

    <>
      <NavBar />

      <Hero />

      <Footer leyenda="Dev Store - Copyright © 2020"/>
    </>

  );
}

export default App;