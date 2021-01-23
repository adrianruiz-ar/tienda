import {useState} from 'react';
import './NavBar.css';

import { IoMdCart } from 'react-icons/io';

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
           
            <nav>

                <ul>
                    <li><NavItem categoria="Lenguajes" ruta="lenguajes"/></li>
                    <li><NavItem categoria="Librerías" ruta="librerias"/></li>
                    <li><NavItem categoria="Frameworks" ruta="frameworks"/></li>
                    <li><NavItem categoria="Herramientas" ruta="herramientas"/></li>     
                </ul>

                <div className="contadorCart">
                    <div className="iconoCart" onClick={openCartWidget}><IoMdCart size={30}/></div>
                    <div><CartWidget show={showCartWidget} set={openCartWidget} /></div> 
                    <div><span>0</span></div>
                </div>

            </nav>

        </>

    )
}

export default NavBar;