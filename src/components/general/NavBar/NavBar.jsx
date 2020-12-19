import {useState} from 'react';
import './NavBar.css';

import NavItem from '../NavItem/NavItem';
import { IoIosHome, IoMdCart } from 'react-icons/io';
import CartWidget from '../CartWidget/CartWidget';


function NavBar(action) {

    const [showCartWidget, setShowCartWidget] = useState(false);
    // eslint-disable-next-line

    const openCartWidget = () => {
        setShowCartWidget(true);
    }


    return (

        <>

            <p className="titulo"><h1>Dev Store</h1></p>

            <nav>
                <p><IoIosHome size={30}/></p>

                <ul>
                    <NavItem categoria="Lenguajes" />
                    <NavItem categoria="Librerías" />
                    <NavItem categoria="Frameworks" />
                    <NavItem categoria="Herramientas" />
                </ul>

                <p className="iconoCart" onClick={openCartWidget}><IoMdCart size={30}/></p>

                <div className="contadorCart">
                    <CartWidget show={showCartWidget} /> 
                    <span>0</span>
                </div>
            </nav>

        </>

    )
}

export default NavBar;