import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './DetailContainer.css';
import ProductDetail from './ProductDetail';

import { getFirestore } from "../../db";

const DetailContainer = () => {

    const [cursos, setCursos] = useState(null);

    const {id_curso} = useParams();

    const db = getFirestore();

    /*
    const getCursos = new Promise((resolve, reject) => {

        setTimeout(() => {
            // eslint-disable-next-line
            const cursoDetalle = listaCursos.find( curso => curso.id == id_curso);
            resolve(cursoDetalle);
        }, 1000);

    });
    */

    useEffect(() => {
        db.collection('cursos').doc(id_curso).get()
            .then(doc => {
                if(doc.exists) {
                    setCursos(doc.data());
                }
            })
            .catch(e => console.log(e));
            // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                cursos ?
                <div className="detalleContenedor">

                    <h2>Detalle del Cursos</h2>

                    <ProductDetail item={cursos} />

                </div> : 
                <div className="cargando">
                    <p><h3>Cargando Cursos...</h3></p>
                </div>
                
            }
        </>
    )
}
export default DetailContainer; 