import React from "react";
import "../../App.css"
const AsideLeft = () => {
    return (
        <div className="main-footer text-white"
             style={style.container}>
            <div className={"container"}
            >
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className={"list-unstyled"}>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className={"list-unstyled"}>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <h4>Lorem ipsum</h4>
                        <ul className={"list-unstyled"}>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                            <li><a href={"/"}> Lorem ipsum</a></li>
                        </ul>
                    </div>
                </div>
                <div className={"footer-bottom"}
                     style={style.bottom}>
                    <p className={"text-xs-center"}>
                        &copy; {new Date().getFullYear()} Erki Services, Tous droits réservés
                    </p>
                </div>
            </div>
        </div>
    )
}
export default AsideLeft
// const style = StyleSheet.create(
//     {
//        container : {
//            backgroundColor: "rgb(0,0,0)"
//        }
//     }
// )
const style =
    {
        container : {
            backgroundColor: "rgb(189,16,16)",
            "padding-top" : "2rem",
            positionAlign : "left",
            position: "fixed",
            // padding: 10px 10px 0px 10px,
            left: 0,
            height:"100%"
            // width: "100%",
            // /* Height of the footer*/
            // height: 40px,
            // background: grey,
        },
        bottom : {
            "padding-top" : "3rem"
        }
    }

