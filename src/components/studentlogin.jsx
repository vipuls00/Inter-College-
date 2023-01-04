import axios from "axios";
import './teacherlogin.css';
import { useNavigate } from 'react-router-dom';
// import { response } from "express";
import React, { useState } from "react";
import { NavBar } from "./navbar";
let Studentlogin = () => {
    let [state, setState] = useState({
        student: {
            name: "",
            password: "",
        }
});
    // let changeusername=(event)=>{
    //     setState((state)=({
    //         user :{
    //             ...state.user,
    //             password : event.target.value
    //         }
    //     }));
    // };
    let changeinput = (event) => {
        setState((state) = ({
            student: {
                ...state.student,
                [event.target.name]: event.target.value
            }
        }));
    }
    const login = () => {
        axios.post("http://localhost:5000/studentlogin", student).then(
            //  res => alert(res.data.message)
            
            res =>{
                if(res.data.status){
                    navigate('/studenthome')
                    console.log(student)
                }
                else{
                    console.log(student)
                    navigate('/mainlogin')
                }
            }
        )
    }

//    const login = ()=>{
//  axios.post("http://localhost:5000/teacherlogin",user).then(
//     res=> alert(res.data.user.name)
//  )
//    }


    let {student } = state;

    const navigate = useNavigate();
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <div className="box">
                <div className="h5 display-4">Students Login</div>
                <div className="container shadow-lg">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h3 className="display-4 text-center ">Hello Student</h3>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="mt-3">
                                    <p className="h4"> Sign into your account</p>
                                </div>
                                <div className="card-body">
                                    <form method="post" >
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
                                            {/* <input type="submit" className="btn text-white btn-sm" onClick={login} value="Login" /> */}
                                        <div className="btn text-white btn-sm" value="Login" onClick={login} >Login</div>
                                        </div>
                                      <h1 className="register">Don't have an Account, Register <div className="btn btn-primary text-white btn-sm" onClick={() => { navigate('/studentregister') }}>Register</div></h1> 
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
export default Studentlogin;