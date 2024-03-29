import React from "react";
import logo from "../../logo.svg"
import {Link, Outlet} from "react-router-dom"
const NavBar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid ">
                    <a className="navbar-brand ml-5" href="#" >
                        <img src={logo} alt={"logo"} style={{
                            width:"35px",
                            marginLeft : "30px"
                        }}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active text-white text-uppercase ml-5" aria-current="page" to="/" >Accueil</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ml-5" to="#">Qui sommes-nous?</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white text-uppercase ml-5" to={"contact"} >Nous contacter</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </>)
}

export default NavBar;
