import { useContext } from 'react';
import { Link } from "react-router-dom";

import './CartWidget.css';

import {Store} from '../../../store';


function CartWidget( {show, set} ) {

    const [data, setData] = useContext(Store);

    return(

        <div className={`cartWidget ${show ? 'open' : 'close'} `}>
            <button onClick={set}>Cerrar</button>

            <p>Cursos Agregados:</p>

            <div>
                {
                    data.items.map(item => <p>{item.curso.titulo}</p>)
                }
            </div>

            <Link to={`/cart`}><button>Ver Más Detalle</button></Link>
        </div>

    )

}

export default CartWidget;