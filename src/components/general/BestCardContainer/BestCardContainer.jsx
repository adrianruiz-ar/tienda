import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";

import ProductCard from '../ProductCard/ProductCard';

import './BestCardContainer.css';

import { getFirestore } from "../../../db";


function BestCardContainer() {

    const db = getFirestore();

    const [items, setItems] = useState([]);

    const {category_name} = useParams();

    const getCursosFromDB = () => {

        db.collection('cursos').where("destacado", "==", true).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setItems(arr);
            })
            .catch(e => console.log(e));

    }

    const getCursosCategorias = () => {

        db.collection('cursos').where("categoria", "==", category_name).get()
            .then(docs => {
                let arr = [];
                docs.forEach(doc => {
                    arr.push({id: doc.id, data: doc.data()})
                })

                setItems(arr);
            })
            .catch(e => console.log(e));

    }
    
    useEffect(() => {

        category_name ?
            getCursosCategorias(rta => setItems(rta))
        : 
            getCursosFromDB(rta => setItems(rta));

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
                                items.map((item) =>(  
                                    <li key={item.id}>
                                        <ProductCard
                                            titulo={item.data.titulo}
                                            precio={item.data.precio}
                                            cupo={item.data.cupo}
                                            id={item.id}
                                            img={item.data.img}
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