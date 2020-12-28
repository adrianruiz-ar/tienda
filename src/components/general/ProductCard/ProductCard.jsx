import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

import { IoIosLaptop } from "react-icons/io";


function ProductCard(props) {

    return(

        <article>
            
            <div className="imgCard"><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <ItemCount />

        </article>

    )
}

export default ProductCard;