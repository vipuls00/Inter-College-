import axios from "axios";
import './managestudents.css'
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "./navbaradmin";
let Managestudents = () => {
    let [state, setState] = useState(
        {
        students: []
    }
    );
    useEffect(() => {
        axios.get("http://localhost:5000/getstudents").then(
            res => {
                setState(() => ({
                    students: res.data
                }));
                // console.log(res);
            }
        )
    },[])
    const navigate =  useNavigate();
    let {students } = state;
    return (
        <React.Fragment>
            <Navbaradmin></Navbaradmin>
            <div className="container">
                <div className="row">
                {/* <h1 className="register">Add a Teacher<div className="btn btn-primary text-white btn-sm" onClick={()=>{navigate('/register')}}>Registered Students</div></h1> */}
                    <table className="table table-striped text-center table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>College</th>
                                <th>Contact</th>
                            </tr>
                        </thead>
                        {
                        // students.length > 0 &&
                             students.map((students)=>{
                                return(
                                    <tbody
                                     key={students._id}
                                     >
                                            <tr>
                                                <td>{students.name}</td>
                                                <td>{students.email}</td>
                                                <td>{students.college}</td>
                                                <td>{students.contact}</td>
                                            </tr>
                                    </tbody>
                               )
                           })
                        }
                       
                    </table>
                    <h1 className="register"><div className="btn btn-primary text-white btn-sm" onClick={()=>{navigate('/manageregistered')}}>Registered Students</div></h1>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Managestudents;