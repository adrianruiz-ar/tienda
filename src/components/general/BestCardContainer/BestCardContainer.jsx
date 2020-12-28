import ProductCard from '../ProductCard/ProductCard';

import './BestCardContainer.css';


function BestCardContainer() {

    const productos = [
        { 
            id: 1,
            titulo: 'HTML 5',
            precio: 550,
            cupo: 20, 
        },
        { 
            id: 2,
            titulo: 'CSS 3',
            precio: 650,
            cupo: 15, 
        },
        { 
            id: 3,
            titulo: 'JAVASCRIPT',
            precio: 850,
            cupo: 10,  
        },
        { 
            id: 4,
            titulo: 'REACT JS',
            precio: 1050,
            cupo: 5,  
        },
    ]

    
    return(

        <section className="cursosDestacados">

            <p><h2>Mejores Cursos</h2></p>

            <div className="listadoCursos">
                <ProductCard titulo="HTML 5" precio="550" cupo="20"/>
                <ProductCard titulo="CSS 3" precio="650" cupo="15"/>
                <ProductCard titulo="JAVASCRIPT" precio="850" cupo="10"/>
                <ProductCard titulo="REACT JS" precio="1050" cupo="5"/>
            </div>

        </section>

    )
}

export default BestCardContainer;