import {useState} from 'react';

import './ItemCount.css';

function ItemCount(props) {

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

    return (

        <>

            <div className="contadores">
                <button onClick={ () => restar()} disabled={count < 2 ? 'disabled' : null }>-</button>

                <p>{count}</p>

                <button onClick={ () => sumar()} disabled={count > 5 ? 'disabled' : null }>+</button>
            </div>

            <div>
                <button onClick={sumarAlCarro}>Agregar al Carrito</button>
            </div>

        </>
    )

}

export default ItemCount;