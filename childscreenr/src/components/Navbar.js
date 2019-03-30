import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-sm" f>
                <a className="navbar-brand" href="/receptive">ChildScreenr</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/materials"><i className="fa fa-home"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/student">New Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log Out</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar