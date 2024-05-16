import { Link } from "react-router-dom";


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
                                 <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact US</Link>
                                </li> 
                                <li className="nav-item">
                                <Link  className="nav-link" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/Contacts">Contacts</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link  className="nav-link" to="/Liked">Liked</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="#"> Category <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to='/Flats'>Flats</Link></li>
                                        <li><Link to='/Bunglows'>Bunglows</Link></li>
                                        <li><Link to='/Villas'>Villas</Link></li>
                                        <li><Link to='/PG'>PG</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/">Log out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
