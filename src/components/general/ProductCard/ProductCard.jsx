import './ProductCard.css';

import { Link } from "react-router-dom";


function ProductCard(props) {

    return(

        <article>
            
            <div className="imgCard"><img src={`/courses/${props.img}`} alt="cursos de programación"/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <Link to={`/detail/${props.id}`}><button>Ver Detalle</button></Link>

        </article>

    )
}

export default ProductCard;