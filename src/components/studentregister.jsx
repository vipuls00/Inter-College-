import axios from "axios";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Navbaradmin from "./navbaradmin";
import { NavBar } from "./navbar";
let Studentregister = () => {
    let [state, setState] = useState({
        student: {
            name: "",
            password: "",
            email: "",
            contact: "",
            college: ""
        }

    });
    const navigate = useNavigate();
    let changeinput = (event) => {
        setState((state) = ({
            student: {
                ...state.student,
                [event.target.name]: event.target.value
            }
        }));
    }
  
    const register = async (e) => {

        e.preventDefault();
        const { name, password, email,contact ,college} = student;

        console.log(student);

        if (name && password && email && contact && college) {

            await axios.post("http://localhost:5000/studentregister", student).then(
                response =>{ console.log(response)
                alert("registered")}
               
            ).catch((err) => {
                console.log(err);
            });
        }
        else {
            alert("invalid")
        }
    }
    let { student } = state;
 
    return (
        <React.Fragment>
            {/* <Navbaradmin/> */}
            <NavBar></NavBar>
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
                                            name="name"
                                            onChange={changeinput}
                                            value={student.name}
                                            type="text" placeholder="username" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="password"
                                            onChange={changeinput}
                                            value={student.password}
                                            type="password" placeholder="password" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="contact"
                                            onChange={changeinput}
                                            value={student.contact}
                                            type="contact" placeholder="contact" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="college"
                                            onChange={changeinput}
                                            value={student.college}
                                            type="college" placeholder="college" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="email"
                                            onChange={changeinput}
                                            value={student.email}
                                            type="text" placeholder="email" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" formMethod="post" className="btn text-white btn-sm" onClick={register} value="login" />
                                    </div>
                                    <h1 className="register"><div className="btn btn-primary text-white text-center btn-sm" onClick={() => { navigate('/studentlogin') }}>Login</div></h1> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>

    );
}
export default Studentregister;