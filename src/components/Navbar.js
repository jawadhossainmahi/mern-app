import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import mainContext from '../context/mainContext';
const Navbar = (props) => {
    const { authToken, setAuthToken } = useContext(mainContext);
   
    const logout = () => {
        localStorage.removeItem("authToken");
        setAuthToken('');
    }
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Go Food</Link>
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page"
                                >Home
                                    <span className="visually-hidden">(current)</span></Link>
                            </li>
                            {(authToken !== '' ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/my-orders" aria-current="page"
                                        >My Order
                                            <span className="visually-hidden">(current)</span></Link>
                                    </li>

                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Signup</Link>
                                    </li>
                                </>
                            )}

                        </ul>
                        <div className="d-flex my-2 my-lg-0">
                            
                            {authToken !== '' &&
                                (<>
                                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">

                                        <li className='nav-item' >
                                            <Link className="nav-link" to="/cart" aria-current="page"
                                            >Cart
                                            </Link>

                                        </li>
                                        <li className='nav-item' onClick={logout}>
                                            <Link className="nav-link" to="/" aria-current="page"
                                            >Logout
                                            </Link>

                                        </li>
                                    </ul>
                                </>)}
                            {/* <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button> */}
                        </div>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
