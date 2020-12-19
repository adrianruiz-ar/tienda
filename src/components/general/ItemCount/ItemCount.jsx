import './ItemCount.css';

function ItemCount(props) {

    return (

        <div className="contadores">
            <button onClick={ () => props.restar()}>-</button>

            <p>{props.count}</p>

            <button onClick={ () => props.sumar()}>+</button>
        </div>
    )

}

export default ItemCount;