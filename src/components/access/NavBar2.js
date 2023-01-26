import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../../App.css"
import {Link, Outlet} from "react-router-dom";
import React from "react";
import {Form, Image,Button} from "react-bootstrap";
import erki from "./images/erki.jpeg"
import searchIcon from "./images/search_icon2.png"
function NavBar2() {
    return (
        <>
        <Navbar collapseOnSelect expand="md" variant="light" bg={"light"}>
            <Container className={"m-0"}>
                <Navbar.Brand className={"m-md-0"} href="/"><Image  style={{width : "50px", margin : 0}} src={erki}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={""} style={{
                    border : "none",
                    ":hover" :{
                        backgroundColor :"#000",
                        border : "none"
                    }
                }}/>
                    <Button className={"m-2"} variant="none"
                    style={{
                        ":hover" : {
                            backgroundColor : "#000"
                        }
                    }}>Rechercher <Image style={{
                        backgroundColor : "#000",
                        width : "20px"
                    }} src={searchIcon}/></Button>
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Accueil</Nav.Link>
                        <Nav.Link to="/contact" as={Link}>Présentation</Nav.Link>
                        <NavDropdown title="Projets" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action réalisées</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                               Actions en cours
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Voir toutes les actions
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to="/contact" as={Link}>Publications</Nav.Link>
                        <Nav.Link to="/contact" as={Link}>Contact</Nav.Link>
                        <Nav.Link to="/login" as={Link}>Connexion</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    <Outlet/>
    </>
    );
}

export default NavBar2;
const styles = {
   container : {
       backgroundColor : "#ffffff",
       color : "#000"
   }
}
