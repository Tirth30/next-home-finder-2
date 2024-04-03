import React from "react"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                            <i className="fas fa-home"></i>
                                <span className="ms-2">
                                    Next Home Finder
                           </span>
                            </div>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link  className="nav-link" to="/blog">Contacts</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact US</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"> Category <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="#">Flats</Link></li>
                                        <li><Link to="#">Bunglows</Link></li>
                                        <li><Link to="#">Villas</Link></li>
                                        <li><Link to="#">PG</Link></li>
                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;