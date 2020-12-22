import {useState} from 'react';

import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';

import { IoIosLaptop } from "react-icons/io";


function ProductCard(props) {

    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
    }

    const sumarAlCarro = () => {
        alert(`Agregaste ${count} al Carrito!`);
    }

    return(

        <article>
            
            <div className="imgCard"><IoIosLaptop size={50}/></div>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>

            <ItemCount count={count} sumar={sumar} restar={restar} />

            <button onClick={sumarAlCarro}>Agregar al Carrito</button>

        </article>

        
    )
}

export default ProductCard;