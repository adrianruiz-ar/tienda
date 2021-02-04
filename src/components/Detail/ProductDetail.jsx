import './ProductDetail.css';

import ItemCount from '../general/ItemCount/ItemCount';

const ProductDetail = ({item}) => {
    
    return (
        <article>
            <img src={`../courses/${item.img}`} alt="cursos de programación"/>
            <h1>Curso: {item.titulo}</h1>
            <p>Descripción: {item.descripcion}</p>
            <p>Costo: <strong>$ {item.precio}</strong></p>


            <ItemCount curso={item}/>
        </article>
    )

}

export default ProductDetail; 