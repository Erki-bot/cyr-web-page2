import React, {useState} from "react";
import Login from "../layouts/Login";
import SignIn from "../layouts/SignIn";

const Connexion = () => {
    let [login, setLogin] = useState(true);
    return login? <Login setLogin = {setLogin}/> : <SignIn setLogin = {setLogin}/>
}

export default Connexion
