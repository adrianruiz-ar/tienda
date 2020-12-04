import { FcShop } from 'react-icons/fc';
import { FcMultipleInputs } from 'react-icons/fc';

function NavBar() {

    return (

        <div className="w-full pt-5 bg-gray-300 text-center font-mono">

            <h1 className="text-4xl text-blue-800">Dev Shop</h1>

            <div class="flex justify-between mx-auto">

                <div className="align-middle p-5"><FcShop size={50}/></div>

                <nav className="text-2xl pt-5">
                    <ul className="flex flex-row flex-wrap">
                        <li>Lenguajes</li>
                        <li className="mx-3">Librerías</li>
                        <li className="mx-3">Frameworks</li>
                        <li>Herramientas</li>
                    </ul>
                </nav>

                <p className="align-middle p-5"><FcMultipleInputs size={50}/></p>
            </div>
        </div>

    )
}

export default NavBar;