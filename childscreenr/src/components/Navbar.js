import React from 'react';
import { Link } from 'react-router-dom'

// import GoogleAuth from './GoogleAuth'

const Navbar = (props) => {

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                ChildScreenRx
            </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    <i className="fas fa-home"></i>
                </Link>
                <Link to="/studentinfo" className="item">
                    <i className="fas fa-user-graduate"></i>
                </Link>
                <Link to="/receptive" className="item">
                    <i className="fas fa-assistive-listening-systems"></i>
                </Link>
                <Link to="/expressive" className="item">
                    <i className="far fa-comments"></i>
                </Link>
                <Link to="/social" className="item">
                    <i className="fas fa-theater-masks"></i>
                </Link>
                <Link to="/redflags" className="item">
                    <i className="fas fa-flag"></i>
                </Link>
                <Link to="/resultschart" className="item">
                    <i className="fas fa-chart-line"></i>
                </Link>
                <Link to="/report" className="item">
                    <i className="far fa-file-alt"></i>
                </Link>

                {/* <GoogleAuth /> */}
            </div>
        </div>

    )
}

export default Navbar