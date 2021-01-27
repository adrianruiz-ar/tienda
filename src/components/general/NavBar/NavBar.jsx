import {useState, useContext} from 'react';
import './NavBar.css';

import { IoMdCart } from 'react-icons/io';

import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';

import {Store} from '../../../store';


function NavBar(action) {

    const [data, setData] = useContext(Store);

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
                    <div><span>{data.cantidad}</span></div>
                </div>

            </nav>

        </>

    )
}

export default NavBar;