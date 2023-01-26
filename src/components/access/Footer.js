import React from "react";
import "../../App.css"
import {Nav, Navbar} from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar
            className={"bg-dark"}
            // sticky={"bottom"}
            expand="lg"
            // variant="dark"
            >
            {/*<div className="main-footer text-white"*/}
            {/*     style={style.container}>*/}
            {/*    <div className={"container"}*/}
            {/*   >*/}
                <Nav className="col-md-3 col-sm-6">
                    <h4>Lorem ipsum</h4>
                    <ul className={"list-unstyled"}>
                        <li><a href={"/"}> Lorem ipsum</a></li>
                        <li><a href={"/"}> Lorem ipsum</a></li>
                    </ul>
                </Nav>
                <Nav className="col-md-3 col-sm-6">
                    <h4>Lorem ipsum</h4>
                    <ul className={"list-unstyled"}>
                        <li><a href={"/"}> Lorem ipsum</a></li>
                        <li><a href={"/"}> Lorem ipsum</a></li>

                    </ul>
                </Nav>
                <Nav className="col-md-3 col-sm-6">
                    <h4>Lorem ipsum</h4>
                    <ul className={"list-unstyled"}>
                        <li><a href={"/"}> Lorem ipsum</a></li>
                        <li><a href={"/"}> Lorem ipsum</a></li>
                    </ul>
                </Nav>

            <div className={"copyright"}
                 style={style.bottom}>
                <p className={"text-xs-center text-white"}>
                    &copy; {new Date().getFullYear()} Erki Services, Tous droits réservés
                </p>
            </div>

            {/*    </div>*/}
            {/*</div>*/}
        </Navbar>
    )
}
export default Footer
// const style = StyleSheet.create(
//     {
//        container : {
//            backgroundColor: "rgb(0,0,0)"
//        }
//     }
// )
const style =
    {
        container: {
            backgroundColor: "rgb(189,16,16)",
            // "padding-top": "2rem",
            positionAlign: "bottom",
            position: "fixed",
            // padding: 10px 10px 0px 10px,
            bottom: 0,
            width: "100%",
            marginTop : "200px"
            // /* Height of the footer*/
            // height: 40px,
            // background: grey,
        },
        bottom: {
            "padding-top": "3rem"
        }
    }

