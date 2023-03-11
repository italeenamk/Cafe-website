import React from "react";
import './style/navbar.css';
import navbar_logo from './imges/logo.png';
import './style/mobile_style.css';

const Navbar=()=>{
    return(
        <>
            <section id="nav-bar">
                <div className="container-fluid p-0">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
                        <a href="#" className="navbar-brand"><img src={ navbar_logo } alt="" className="w-25"/></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="ml-auto"></div>
                            <div className="navbar-list">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Watch Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Blocks <span></span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Demo Pages <span></span></a>
                                    </li>
                                    <div className="navbar-btn">
                                        <a href="">BUY NOW</a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Navbar;