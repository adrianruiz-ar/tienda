import './CartWidget.css';


function CartWidget( {show, set} ) {

    return(

        <div className={`cartWidget ${show ? 'open' : 'close'} `}>
            <button onClick={set}>Cerrar</button>
        </div>

    )

}

export default CartWidget;