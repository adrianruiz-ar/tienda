import './NavBar.css';

import { FcShop } from 'react-icons/fc';
import { FcMultipleInputs } from 'react-icons/fc';

function NavBar() {

    return (

        <>

            <div className="titulo"><h1>Dev Shop</h1></div>

                <nav>
                    <p><FcShop size={50}/></p>

                    <ul>
                        <li>Lenguajes</li>
                        <li>Librerías</li>
                        <li>Frameworks</li>
                        <li>Herramientas</li>
                    </ul>

                    <p><FcMultipleInputs size={50}/></p>
                </nav>

        </>

    )
}

export default NavBar;