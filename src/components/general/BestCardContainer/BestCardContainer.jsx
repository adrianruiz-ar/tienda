import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import ProductCard from '../ProductCard/ProductCard';

import './BestCardContainer.css';

import { listaCursos } from "../../../cursos";


function BestCardContainer() {

    const [items, setItems] = useState([]);

    const {categoryname} = useParams();

    const getCursos = new Promise((resolve, reject) => {

        setTimeout(() => {
            
            if(categoryname){
                const cursoDetalle = listaCursos.find( curso => curso.categoria == categoryname);
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
    }, [] )
  

    return(

        <div className="cursosDestacados">

            <p><h2>Mejores Cursos</h2></p>

         
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