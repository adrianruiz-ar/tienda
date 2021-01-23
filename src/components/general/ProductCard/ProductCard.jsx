import './ProductCard.css';

import { IoIosLaptop } from "react-icons/io";
import { Link } from "react-router-dom";


function ProductCard(props) {

    return(

        <article>
            
            <div className="imgCard"><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <Link to={`/detail/${props.id}`}><button>Ver Detalle</button></Link>

        </article>

    )
}

export default ProductCard;