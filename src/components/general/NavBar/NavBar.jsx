import {useState} from 'react';
import './NavBar.css';

import { IoIosHome, IoMdCart } from 'react-icons/io';
import { Link } from "react-router-dom";

import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';


function NavBar(action) {

    const [showCartWidget, setShowCartWidget] = useState(false);
    // eslint-disable-next-line

    const openCartWidget = () => {
        setShowCartWidget(!showCartWidget);
    }

    return (

        <>

            <p className="titulo"><h1>Dev Store</h1></p>

            <nav>
                <p><Link to="/"><IoIosHome size={30}/></Link></p>

                <ul>
                    <NavItem categoria="Lenguajes" ruta="lenguajes"/>
                    <NavItem categoria="Librerías" ruta="librerias"/>
                    <NavItem categoria="Frameworks" ruta="frameworks"/>
                    <NavItem categoria="Herramientas" ruta="herramientas"/>
                </ul>

                <p className="iconoCart" onClick={openCartWidget}><IoMdCart size={30}/></p>

                <div className="contadorCart">
                    <CartWidget show={showCartWidget} set={openCartWidget} /> 
                    <span>0</span>
                </div>
            </nav>

        </>

    )
}

export default NavBar;