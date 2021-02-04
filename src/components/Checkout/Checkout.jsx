import { useState, useContext } from 'react';

import './Checkout.css';

import { Store } from '../../store';

import { getFirestore } from '../../db';

import firebase from 'firebase/app';


const Checkout = () => {

    const db = getFirestore();

    const [data, setData] = useContext(Store);

    const [ventaEstado, setVentaEstado] = useState(false);

    const [idVenta, setIdVenta] = useState('');

    const [formPago, setFormPago] = useState({
        nombre: '',
        apellido: '',
    });

    const handleChangeInput = (e) => {
        setFormPago({...formPago, [e.target.name]: e.target.value});
    }

    const venta = {
        user: formPago,
        items: data.items,
        totalPrice: data.precioTotal,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        db.collection('ventas').add(venta)
        .then(({id}) => {
            setVentaEstado(true);
            setIdVenta(id);
        })
        .catch(e => console.log(e));
    }

    return (
        <div className="pago">

            <h2>Finalizar Compra - Pago</h2>

            {
                !ventaEstado ?
                <form onSubmit={handleSubmitForm}>
                    <input type="text" value={formPago.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre"/>
                    <input type="text" value={formPago.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido"/>

                    <button>Pagar</button>
                </form> :

                <p>Se completo la venta. Seguimiento: {idVenta} </p>
            }
            

        </div>
    )
}

export default Checkout;