import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import ProductCard from '../ProductCard/ProductCard';

import './BestCardContainer.css';

import { listaCursos } from "../../../cursos";


function BestCardContainer() {

    const [items, setItems] = useState([]);

    const {category_name} = useParams();

    const getCursos = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if(category_name){
                const cursoDetalle = listaCursos.filter( curso => curso.categoria === category_name);
                resolve(cursoDetalle);
            }
            else{
                const cursosDestacados = listaCursos.filter(curso => curso.destacado);
                resolve(cursosDestacados);
            }
            
        }, 1000)
    })
    
    useEffect(() => {
        getCursos.then(rta => setItems(rta));
        // eslint-disable-next-line
    }, [category_name] )
  

    return(

        <div className="cursosDestacados">
            
            {
                category_name ?

                    <p><h2>Cursos de {category_name} para Desarrollo</h2></p>

                :
                    <p><h2>Los Mejores Cursos</h2></p>
            }

            <ul className="listadoCursos">
                {
                    items.length ?
                        <>
                            {
                                items.map((item, id) =>(  
                                    <li key={id}>
                                        <ProductCard
                                            titulo={item.titulo}
                                            precio={item.precio}
                                            cupo={item.cupo}
                                            id={item.id}
                                        />
                                    </li>
                                 ))
                            }
                        </> :

                    <p><h4>Cargando Cursos...</h4></p>
                }
            </ul>
           
        </div>

    )
}

export default BestCardContainer;