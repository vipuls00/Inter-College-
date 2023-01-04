import axios from "axios";
import './mainogin.css';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navbar";

let Adminlogin = () => {
    const navigate = useNavigate();
    let [state, setState] = useState({
        admin: {
            name: "",
            password: "",
        }

    });

    let changeinput = (event) => {
        setState((state) = ({
            admin: {
                ...state.admin,
                [event.target.name]: event.target.value
            }
        }));
    }
    const login = () => {
    
        axios.post("http://localhost:5000/adminlogin", admin).then(
            res => {
                // alert(res.data.admin._id);
                if (res.data.status) {
                    navigate('/adminhome')
                    console.log(admin)
                }
                else {
                    console.log(admin)
                    navigate('/teacherlogin')
                }
            }
        )
    }


    let { admin } = state;

    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="box">
                <div className="h5 display-4">Admin Login</div>
                <div className="container shadow-lg">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h3 className="display-4 text-center ">Hello Admin</h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="mt-3">
                                    <p className="h4"> Sign into your account</p>
                                </div>
                                <div className="card-body">
                                    <form method="post"
                                    //   onSubmit={submitlogin}
                                    >
                                        <div className="mb-3">
                                            <input
                                                name="name"
                                                onChange={changeinput}
                                                value={admin.name}
                                                type="text" placeholder="username" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <input
                                                name="password"
                                                onChange={changeinput}
                                                value={admin.password}
                                                type="password" placeholder="password" className="form-control" />
                                        </div>

                                        <div className="mb-3">
                                        <div className="btn text-white btn-sm" value="Login" onClick={login} >Login</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    );
}
export default Adminlogin;