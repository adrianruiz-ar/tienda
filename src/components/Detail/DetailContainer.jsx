import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import './DetailContainer.css';
import ProductDetail from './ProductDetail';

import { listaCursos } from "../../cursos";

const DetailContainer = () => {

    const [cursos, setCursos] = useState(null);

    const {idcurso} = useParams();
    
    const getCursos = new Promise((resolve, reject) => {

        setTimeout(() => {
            const cursoDetalle = listaCursos.find( curso => curso.id == idcurso);
            resolve(cursoDetalle);
        }, 1000);

    });

    useEffect(() => {
        getCursos
            .then(response => setCursos(response))
            .catch(error => console.log(error));
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