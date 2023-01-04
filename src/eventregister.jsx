import axios from "axios";

import React, { useState } from "react";
import { useEffect } from "react";
import Navbaradmin from "./components/navbaradmin";

let Eventregister = () => {
    let [state, setState] = useState({
        events: {
            eventname: "",
            date: "",
            collegename: "",
            type: "",
            teacher: "",
            fees: ""
        },
        teachers: []
    });
    let [teacher, setteacher] = useState(
        {
            teachers: []
        }
    );
 
    let { events } = state;
    let { teachers } = teacher;

    useEffect(() => {
 
        axios.get("http://localhost:5000/getteacher").then(
            res => {
              
                setteacher(() => ({
                  
                    teachers: res.data
                }));
            }
        )
    }, [state])

    let changeinput = (event) => {
        setState((state) = ({
            events: {
                ...state.events,
                [event.target.name]: event.target.value
            }
        }));
    }


    const register = async (e) => {

        e.preventDefault();
        const { eventname, date, collegename, type, teacher, fees } = events;

        console.log(events);

        if (eventname && date && collegename && type && teacher && fees) {

            await axios.post("http://localhost:5000/eventregister", events).then(
                response => {
                    console.log(response)
                    alert("registered")
                }

            ).catch((err) => {
                console.log(err);
            });
        }
        else {
            alert("invalid")
        }
    }


    return (
        <React.Fragment>
            <Navbaradmin></Navbaradmin>
            <div className="container mt-8">
                <div className="row">
                    <div className="col-md-3 justify-content-sm-center">
                        <div className="card">
                            <div className="card-header bg-light text-dark">
                                <p className="h4"> Register here</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <input
                                            name="eventname"
                                            onChange={changeinput}
                                            value={events.eventname}
                                            type="text" placeholder="Eventname" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="date"
                                            onChange={changeinput}
                                            value={events.date}
                                            type="date" placeholder="Date" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="collegename"
                                            onChange={changeinput}
                                            value={events.collegename}
                                            type="collegename" placeholder="Collegename" className="form-control" />
                                    </div>
                                    {/* <div className="mb-3">
                                        <input
                                            name="type"
                                            onChange={changeinput}
                                            value={events.type}
                                            type="type" placeholder="Indoor/Outdoor" className="form-control" />
                                    </div> */}
                                    <div className="mb-3">
                                        <select name="type" type="type" id=""
                                           //  value={events.type}
                                            placeholder="type"
                                             onChange={changeinput}
                                            className="form-control">
                                            <option value="Indoor">Indoor</option>
                                            <option value='Outdoor'>outdoor</option>
                                        </select>
                                    </div>
                                    {/* <input
                                            name="teacher"
                                            onChange={changeinput}
                                            value={events.teacher}
                                            type="teacher" placeholder="Teacher" className="form-control" /> */}
                                    <div className="mb-3">
                                        <select name="teacher"
                                             // value={events.teacher} 
                                           // value={selected}
                                            onChange={changeinput}
                                            type="teacher" placeholder="Teacher" className="form-control" id="">
                                            {
                                                teachers.map((teachers) => {
                                                    return (

                                                        <option value={teachers.name}>{teachers.name}</option>

                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="fees"
                                            onChange={changeinput}
                                            value={events.fees}
                                            type="fees" placeholder="Fees" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" formMethod="post" className="btn text-white btn-sm" onClick={register} value="login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>

    );
}
export default Eventregister;