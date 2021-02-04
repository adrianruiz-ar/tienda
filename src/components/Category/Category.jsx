import './Category.css';

import { Link } from "react-router-dom";

const Category = () => {

    return (
        <div className="category">

            <h2>Categorías de Cursos</h2>
            
            <div className="listado">
                <div>
                    <Link to={`/category/lenguajes`}>Lenguajes</Link>
                </div>
                <div>
                    <Link to={`/category/librerias`}>Librerías</Link>
                </div>
                <div>
                    <Link to={`/category/frameworks`}>Frameworks</Link>
                </div>
                <div>
                    <Link to={`/category/herramientas`}>Herramientas</Link>
                </div>
            </div>

        </div>
    )
        
}

export default Category;