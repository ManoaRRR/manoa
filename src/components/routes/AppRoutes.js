import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Stacks from "../../pages/Stacks";
const AppRoutes = () => {
 return(
    <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>  
        <Route path="/stacks" element= {<Stacks/>} />
    </Routes>
 )
}
export default AppRoutes;