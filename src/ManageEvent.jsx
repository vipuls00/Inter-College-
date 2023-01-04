import axios from "axios";
import './CSS/manageteacher.css'
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbaradmin from "./components/navbaradmin";
let ManageEvent = () => {
    let [state, setState] = useState(
        {
        events: []
    }
    );
 
    useEffect(() => {
        axios.get("http://localhost:5000/event").then(
            res => {
                setState(() => ({
                    events: res.data
                }));
                 console.log(res);
            }
        )
    },[])
    const navigate =  useNavigate();
    let { events } = state;
    return (
        <React.Fragment>
           
            <div className="container">
            <Navbaradmin></Navbaradmin>
                <div className="row">
                <h1 className="register">Add an Event<div className="btn btn-primary text-white btn-sm" onClick={()=>{navigate('/eventregister')}}>Register</div></h1>
                    <table className="table table-striped text-center table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Event Name</th>
                                <th>Date</th>
                                <th>College Name</th>
                                <th>Type</th>
                                <th>Teacher</th>
                                <th>Fees</th>
                            </tr>
                        </thead>
                        {
                        // events.length > 0  &&
                            events.map((events)=>{
                                return(
                                    <tbody>
                                            <tr>
                                                <td>{events.eventname}</td>
                                                <td>{events.date}</td>
                                                <td>{events.collegename}</td>
                                                <td>{events.type}</td>
                                                <td>{events.teacher}</td>
                                                <td>{events.fees}</td>
                                            </tr>
                                    </tbody>
                                )
                            })
                        }
                       
                    </table>
                   
                </div>
            </div>
        </React.Fragment>
    );
}
export default ManageEvent;