import { useContext } from 'react';
import { Link } from "react-router-dom";

import './Cart.css';

import {Store} from '../../store';


const Cart = () => {

    const [data, setData] = useContext(Store);

    const eliminarCurso = () => {
        
    }


    return (

        <div className="cart">

            <h2>Carrito: cursos elegidos</h2>

                { data.items.length ?

                    <div className="contenido">

                        <div className="detalle">
                            {
                                data.items.map(item => (

                                    <div>
                                        <h3>* Curso: {item.curso.titulo}</h3>
                                        <p>Cantidad: {data.cantidad}</p>
                                        <p>Costo por Curso: <strong>$ {item.curso.precio}</strong></p>
                                        <p>Total: <strong>$ {item.curso.precio * data.cantidad}</strong></p>
                                        <button onClick={eliminarCurso()}>Eliminar</button>
                                    </div>

                                ))
                            }
                            
                        </div>

                        <div className="totales">
                            <p>Cantidad Total de Cursos: <strong> {data.cantidad} </strong></p>
                            <p>Costo Total: <strong> $ {data.precioTotal} </strong> </p>
                            <Link to={`/checkout`}><button>Finalizar Compra</button></Link>          
                        </div>

                    </div>

                :

                    <h4>Todavía no agregaste Cursos a tu carrito</h4>

                }

        </div>
        

    )
}

export default Cart;