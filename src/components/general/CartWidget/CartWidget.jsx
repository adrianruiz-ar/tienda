import './CartWidget.css';


function CartWidget( {show} ) {

    return(

        <div className={`cartWidget ${show ? 'open' : 'close'} `}>
            <span>Cerrar</span>
        </div>

    )

}

export default CartWidget;