import './ProductDetail.css';

import ItemCount from '../general/ItemCount/ItemCount';

const ProductDetail = ({item}) => {

    return (
        <article>
            <h1>Curso: {item.titulo}</h1>
            <img src={item.foto} alt=""/>
            <p>Descripción: {item.descripcion}</p>
            <p>Costo: $ {item.precio}</p>


            <ItemCount curso={item}/>
        </article>
    )

}

export default ProductDetail; 