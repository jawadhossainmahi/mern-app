import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    const [authToken, setAuthToken] = useState('');
    const searchText = (e) => {
        props.search(e.target.value)
    }
    const logout = () => {
        localStorage.removeItem("authToken");
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
                            {(localStorage.getItem("authToken") ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/" aria-current="page"
                                        >My Order
                                            <span className="visually-hidden">(current)</span></Link>
                                    </li>
                                    <li className='nav-item' onClick={logout}>
                                        <Link className="nav-link" to="/" aria-current="page"
                                        >Logout
                                        </Link>

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

                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to="#"
                                    id="dropdownId"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >Dropdown</Link>
                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownId"
                                >
                                    <Link className="dropdown-item" to="#"
                                    >Action 1</Link>
                                    <Link className="dropdown-item" to="#"
                                    >Action 2</Link>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex my-2 my-lg-0">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search" onChange={searchText}
                            />
                            {/* <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button> */}
                        </form>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
