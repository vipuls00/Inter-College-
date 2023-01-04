import axios from "axios";

import React, { useState } from "react";
import Navbaradmin from "./navbaradmin";
let Loginform = () => {
    let [state, setState] = useState({
        user: {
            name: "",
            password: "",
            email: "",
            contact: "",
            college: ""
        }

    });

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
        const { name, password, email,contact ,college} = user;

        console.log(user);

        if (name && password && email && contact && college) {

            await axios.post("http://localhost:5000/register", user).then(
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
    let { user } = state;
 
    return (
        <React.Fragment>
            <Navbaradmin/>
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
                                            value={user.name}
                                            type="text" placeholder="username" className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            name="password"
                                            onChange={changeinput}
                                            value={user.password}
                                            type="password" placeholder="password" className="form-control" />
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
export default Loginform;