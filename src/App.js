import logo from './logo.svg';
import './App.css';
import NavBar from "./components/access/NavBar";
import Footer from "./components/access/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./components/pages/Home";
import {Contact} from "./components/pages/Contact";
import NavBar2 from "./components/access/NavBar2";
import AsideLeft from "./components/access/AsideLeft";
import Connexion from "./components/pages/Connexion";

function App() {
  return (
   <>
       <BrowserRouter>
           <Routes>
               <Route path={"/"} element={<NavBar2/>}>
                   <Route index element={<Home/>}/>
                   <Route path={"contact"} element={<Contact/>}/>
                   <Route path={"login"} element={<Connexion/>}/>
               </Route>
           </Routes>
       </BrowserRouter>
       <Footer/>
   </>
  );
}

export default App;
