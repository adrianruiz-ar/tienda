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
                <div>
                    <ProductDetail item={cursos} />

                    <div>
                        Cursos Recomendados
                    </div>
                </div> : 
                <p>Cargando Cursos...</p>
            }
        </>
    )
}
export default DetailContainer; 