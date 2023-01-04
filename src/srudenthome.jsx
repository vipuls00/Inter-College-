import React from "react";
import Navbaradmin from "./components/navbaradmin";
import ViewEvent from "./components/viewevents";
import ManageEvent from "./ManageEvent";
import Manageteacher from "./manageteacher";
import StudentNavbar from "./Studentnavbar";
let StudentHome =()=>{
    return(
        <React.Fragment>
            
            <div className="container">
            <StudentNavbar></StudentNavbar>
            </div>
            <div className="container">
            <ViewEvent></ViewEvent>
            </div>
           
        </React.Fragment>
    )
}
export default StudentHome;