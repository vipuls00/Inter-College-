import axios from "axios";
import './CSS/manageteacher.css'
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
let Manageteacher = () => {
    let [state, setState] = useState(
        {
        teachers: []
    }
    );
    useEffect(() => {
        axios.get("http://localhost:5000/getteacher").then(
            res => {
                setState(() => ({
                    teachers: res.data
                }));
                // console.log(res);
            }
        )
    },[])
    const navigate =  useNavigate();
    let { teachers } = state;
    return (
        <React.Fragment>

            <div className="container">
                <div className="row">
                
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
                        // teachers.length > 0 &&
                             teachers.map((teachers)=>{
                                return(
                                    <tbody
                                     key={teachers._id}
                                     >
                                            <tr>
                                                <td>{teachers.name}</td>
                                                <td>{teachers.email}</td>
                                                <td>{teachers.college}</td>
                                                <td>{teachers.contact}</td>
                                            </tr>
                                    </tbody>
                                )
                            })
                        }
                       
                    </table>
                    <h1 className="register">Add a Teacher<div className="btn btn-primary text-white btn-sm" onClick={()=>{navigate('/register')}}>Register</div></h1>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Manageteacher;