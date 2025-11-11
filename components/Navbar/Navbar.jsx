import React from 'react'
import logo from '../../src/assets/images/logo.png'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-5" data-aos="fade-down">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" width="150" />    
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item m-2">
                                <a className="nav-link" aria-current="page" href="#">Become a renter</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" aria-current="page" href="#">Rental deals</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" aria-current="page" href="#">How it work</a>
                            </li>
                            <li className="nav-item m-2">
                                <a className="nav-link" aria-current="page" href="#">Why choose us</a>
                            </li>
                        </ul>
                        <form className="d-flex gap-3">
                            <button className="btn btn-outline-primary" type="submit">Login</button>
                            <button className="btn btn-primary" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
