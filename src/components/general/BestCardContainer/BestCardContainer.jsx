import {useState, useEffect} from 'react';

import ProductCard from '../ProductCard/ProductCard';

import './BestCardContainer.css';


function BestCardContainer() {

    const [items, setItems] = useState([]);

    const productos = [
        { 
            id: 1,
            titulo: 'HTML 5',
            precio: 550,
            cupo: 10, 
        },
        { 
            id: 2,
            titulo: 'CSS 3',
            precio: 650,
            cupo: 8, 
        },
        { 
            id: 3,
            titulo: 'JAVASCRIPT',
            precio: 850,
            cupo: 6,  
        },
        { 
            id: 4,
            titulo: 'REACT JS',
            precio: 1050,
            cupo: 4,  
        },
    ]

    const getProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
    
    useEffect(() => {
        getProductos.then(rta => setItems(rta));
        // eslint-disable-next-line
    }, [] )
  

    return(

        <section className="cursosDestacados">

            <p><h2>Mejores Cursos</h2></p>

         
            <ul className="listadoCursos">
                {
                    items.length ?
                        <>
                            {
                                items.map(item =>(
                                    <li key={item.id}>
                                        <ProductCard
                                            titulo={item.titulo}
                                            precio={item.precio}
                                            cupo={item.cupo}
                                        />
                                    </li>
                                 ))
                            }
                        </> :

                    <p><h4>Cargando Cursos...</h4></p>
                }
            </ul>
           
        </section>

    )
}

export default BestCardContainer;