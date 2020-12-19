import {useState} from 'react';

import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

import { IoIosLaptop } from "react-icons/io";


function ProductCard(props) {

    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
    }

    return(

        <article>
            
            <div className="imgCard"><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <ItemCount count={count} sumar={sumar} restar={restar} />

        </article>

        
    )
}

export default ProductCard;