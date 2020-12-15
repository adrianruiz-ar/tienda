import './ProductCard.css';

import { IoIosLaptop } from "react-icons/io";

function ProductCard(props) {

    return(

        <article>
            <div><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>
        </article>

    )
}

export default ProductCard;