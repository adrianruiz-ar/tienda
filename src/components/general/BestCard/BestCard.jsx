import ProductCard from '../../general/ProductCard/ProductCard';

import './BestCard.css';


function BestCard() {

    return(

        <section className="cursosDestacados">

            <p><h2>Mejores Cursos</h2></p>

            <div className="listadoCursos">
                <ProductCard titulo="HTML 5" precio="550"/>
                <ProductCard titulo="CSS 3" precio="650"/>
                <ProductCard titulo="JAVASCRIPT" precio="850"/>
                <ProductCard titulo="REACT JS" precio="1050"/>
            </div>

        </section>

    )
}

export default BestCard;