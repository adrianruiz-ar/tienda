import './Header.css';

import { IoMdLaptop } from 'react-icons/io';

import { Link } from "react-router-dom";

const Header = () => {

    return (

        <div className="header">
            <div className="logo"><Link to="/"><IoMdLaptop size={30}/></Link></div>
            <div><Link to="/"><h1>Dev Store</h1></Link></div>
        </div>
    )

}

export default Header;