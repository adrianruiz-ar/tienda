import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

import { IoIosLaptop } from "react-icons/io";
import { Link } from "react-router-dom";


function ProductCard(props) {

    return(

        <article>
            
            <div className="imgCard"><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <ItemCount cupo={props.cupo}/>

            <Link to={`/detail/${props.id}`}>Ver Detalle</Link>

        </article>

    )
}

export default ProductCard;