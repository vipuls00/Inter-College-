import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navbar";
import Herosection from "./herosection";
import Footer from "./Footer";
import Adminhome from "./adminhome";
import Ourprojects from "./ourprojects";


let Home = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            {/* <Adminhome></Adminhome> */}
            <NavBar></NavBar>
            <Herosection></Herosection>
            <div id="register" className="container shadow-lg">
                <div className="card-columns ">
                    <div className="card-header">
                        <h3>CHOOSE YOUR LOGIN</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4"
                                onClick={() => {
                                    navigate('/mainlogin', { replace: true });
                                }} >
                                <h5> <i class="fa fa-user-plus " ></i></h5>
                                <h3 className="text-center">ADMIN</h3>
                            </div>
                            <div className="col-md-4"
                                onClick={() => {
                                    navigate('/teacherlogin', { replace: true });
                                }} >
                                <h5> <i class="fa fa-user" ></i></h5>
                                <h3 className="text-center">TEACHER</h3>
                            </div>
                            <div className="col-md-4"  onClick={() => {
                                    navigate('/studentlogin', { replace: true });
                                }}>
                                <h5> <i class="fa fa-users " ></i></h5>
                                <h3 className="text-center">STUDENT</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
      <div className="">      <Ourprojects></Ourprojects></div>
      <div className="">       <Footer></Footer></div>
    
        </React.Fragment>
    );

}
export default Home;