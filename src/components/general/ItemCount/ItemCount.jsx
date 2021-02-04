import {useState, useContext} from 'react';

import './ItemCount.css';

import {Store} from '../../../store';

import { useHistory } from 'react-router-dom';

function ItemCount(props) {

    const history = useHistory();

    const [data, setData] = useContext(Store);

    const [count, setCount] = useState(1);

    const sumar = () => {
        setCount(count + 1);
    }

    const restar = () => {
        setCount(count - 1);
    }

    const sumarAlCarro = () => {

        setData({
            ...data,
            cantidad: data.cantidad + count,
            items: [...data.items, props],
            precioTotal: data.precioTotal + (props.curso.precio * count)
        });

        history.push('/cart');
        
    }

    return (

        <>

            <div className="contadores">
                <button onClick={restar} disabled={count <= 1 ? 'disabled' : null }>-</button>

                <p>{count}</p>

                <button onClick={sumar} disabled={count >= (props.curso.cupo) ? 'disabled' : null }>+</button>
            </div>

            <div>
                <button onClick={sumarAlCarro}>Agregar al Carrito</button>
            </div>

        </>
    )

}

export default ItemCount;