import React from "react";
import Manageteacher from "../manageteacher";
import Navbaradmin from "./navbaradmin";
let Adminhome = ()=>{
    return (
        <React.Fragment>
            
            <div className="container">
            <Navbaradmin></Navbaradmin>
            </div>
            <div className="container">
            <Manageteacher></Manageteacher>
            </div>
           
        </React.Fragment>

    );
} 
export default Adminhome;