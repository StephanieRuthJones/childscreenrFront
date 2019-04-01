import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                ChildScreenr
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    <i class="fas fa-home"></i>
                </Link>
                <Link to="/receptive" className="item">
                    Receptive
                </Link>
                <Link to="/expressive" className="item">
                    Expressive
                </Link>
                <Link to="/social" className="item">
                    Social Skills
                </Link>
            </div>
        </div>

    )
}

export default Navbar