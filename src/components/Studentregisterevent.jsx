import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentNavbar from "../Studentnavbar";
import Navbaradmin from "./navbaradmin";
let StudenteventRegister = () => {
    let [state, setState] = useState({
        user: {
            name: "",
            email: "",
            contact: "",
            college: ""
        }

    });
    let [eventa, setevent] = useState(
        {
            eventas: []
        }
    );
    useEffect(() => {

        axios.get("http://localhost:5000/event").then(
            res => {

                setevent(() => ({

                    eventas: res.data
                
                }));
            }
        )
        console.log(eventas);
    }, [state]);
    let { eventas } = eventa;

    let changeinput = (event) => {
        setState((state) = ({
            user: {
                ...state.user,
                [event.target.name]: event.target.value
            }
        }));
    }

    const register = async (e) => {

        e.preventDefault();
        const { name, email, contact, college } = user;

        console.log(user);

        if (name && email && contact && college) {

            await axios.post("http://localhost:5000/registerforevent", user).then(
                response => {
                    console.log(response)
                    alert("Registered")
                }

            ).catch((err) => {
                console.log(err);
            });
        }
        else {
            alert("invalid")
        }
    }
    let { user } = state;

    return (
        <React.Fragment>
            <div className="container">  <StudentNavbar></StudentNavbar></div>
            <div className="container mt-6">
                <div className="row">
                    <div className="col-md-3 justify-content-sm-center">
                        <div className="card">
                            <div className="card-header bg-light text-dark">
                                <p className="h4"> Register here</p>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* <div className="mb-3">
                                        <input
                                            name="name"
                                            onChange={changeinput}
                                            value={user.name}
                                            type="text" placeholder="username" className="form-control" />
                                    </div> */}
                                    <div className="mb-3">
                                        <select name="name"
                                            // value={eventas.teacher} 
                                            //    value={selected}
                                            onChange={changeinput}
                                            type="name" placeholder="Name" className="form-control" id="">
                                            {
                                                eventas.map((eventas) => {
                                                    return (

                                                        <option value={eventas.eventname}>{eventas.eventname}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            name="contact"
                                            onChange={changeinput}
                                            value={user.contact}
                                            type="contact" placeholder="contact" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="college"
                                            onChange={changeinput}
                                            value={user.college}
                                            type="college" placeholder="college" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            onChange={changeinput}
                                            value={user.email}
                                            type="text" placeholder="email" className="form-control" />
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
export default StudenteventRegister;