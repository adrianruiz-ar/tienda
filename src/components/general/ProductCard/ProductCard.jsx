import { IoIosLaptop } from "react-icons/io";

function ProductCard(props) {

    return(

        <article>
            <p><IoIosLaptop size={50}/></p>
            <h3>{props.titulo}</h3>
            <p>$ {props.precio}</p>
        </article>

    )
}

export default ProductCard;