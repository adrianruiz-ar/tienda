import './NavBar.css';

import { IoIosHome } from 'react-icons/io';
import NavItem from '../NavItem/NavItem';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {

    return (

        <>

            <div className="titulo"><h1>Dev Store</h1></div>

                <nav>
                    <p><IoIosHome size={40}/></p>

                    <ul>
                        <NavItem categoria="Lenguajes" />
                        <NavItem categoria="Librerías" />
                        <NavItem categoria="Frameworks" />
                        <NavItem categoria="Herramientas" />
                    </ul>

                    <CartWidget />
                </nav>

        </>

    )
}

export default NavBar;