import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './DetailContainer.css';
import ProductDetail from './ProductDetail';

import { listaCursos } from "../../cursos";

const DetailContainer = () => {

    const [cursos, setCursos] = useState(null);

    const {id_curso} = useParams();

    const getCursos = new Promise((resolve, reject) => {

        setTimeout(() => {
            // eslint-disable-next-line
            const cursoDetalle = listaCursos.find( curso => curso.id == id_curso);
            resolve(cursoDetalle);
        }, 1000);

    });

    useEffect(() => {
        getCursos
            .then(response => setCursos(response))
            .catch(error => console.log(error));
            // eslint-disable-next-line
    }, []);

    return (
        <>
            {
                cursos ?
                <div className="detalleContenedor">
                    <ProductDetail item={cursos} />

                    <div className="recomendados">
                        <p><h3>Cursos Recomendados</h3></p>
                    </div>
                </div> : 
                <div className="cargando">
                    <p><h3>Cargando Cursos...</h3></p>
                </div>
                
            }
        </>
    )
}
export default DetailContainer; 