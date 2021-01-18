import { Link } from "react-router-dom";

function NavItem(props) {

    return (

        <li>
            <Link to={`/category/${props.ruta}`}> {props.categoria} </Link>
        </li>
    )

}

export default NavItem;