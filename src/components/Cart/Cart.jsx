import { useContext } from 'react';
import { Link } from "react-router-dom";

import {Store} from '../../store';


const Cart = () => {

    const [data, setData] = useContext(Store);

    return (
        <>
        
            <h2>Estamos en el Cart</h2>

            <div>
                {
                    data.items.map(item => <p>{item.curso.titulo}</p>)
                }
            </div>

            <Link to={`/checkout`}><button>Finalizar Compra</button></Link>

        </>
    )
}

export default Cart;