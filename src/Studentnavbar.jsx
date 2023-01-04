import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
// import './navbaradmin.css';

let  StudentNavbar = () => {
const logout = ()=>[
    axios.post("http://localhost:5000/logout").then(
       
            navigate('/')
       
    )
]

    const navigate = useNavigate();
   return (
      <nav className='navbar navbar-expand-lg fixed-top shadow-lg ' >
            <div className="container-fluid">
                <div className="h3 text-dark">INTER COLLEGE EVENTS</div>


                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                   
                </div>
                <div className="collapse navbar-collapse fixed-right" id="navbarNavDropdown" >

                    <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                       

                        <li className="nav-item text-dark">
                            <a className="nav-link text-dark" onClick={() => {
                                navigate('/viewevent');
                            }}  href="" >View Event</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-dark" 
                          href="" >Registered Events</a>
                        </li>

                    </ul>
                </div>

                <button type="button" href="#register" class="btn btn-outline-secondary  "> <a className="nav-link text-dark" onClick={logout} 
                            >
                                Logout</a></button>
             
            </div> 
        </nav>
    )
}
export default StudentNavbar;
