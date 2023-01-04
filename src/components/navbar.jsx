import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css';

export const NavBar = () => {
    const [button, setbutton] = useState(true);
    // const [navbar, setNavbar] = useState(false);
    let showbutton = () => {
        if (window.innerWidth <= 960) {
            setbutton(false);
        } else {
            setbutton(true);
        }
    };
    useEffect(() => {
        showbutton();
    }, []);
    const navigate = useNavigate();
    window.addEventListener('resize', showbutton);
    //    const changebackground =()=>{
    //     if(window.scrollY > 80){
    //         setNavbar(true);
    //     }
    //     else{
    //         setNavbar(false);
    //     }
    //    }
    //    window.addEventListener('scroll',changebackground);

    return (
        // 'navbar navbar-expand-lg fixed-top shadow-lg '
        // <nav className= {navbar? 'navbara text-dark': 'navbar navbar-expand-lg fixed-top shadow-lg '} >
        <nav className='navbar navbar-expand-lg fixed-top shadow-lg ' >
            <div className="container-fluid">
                <div className="h3 text-dark">INTER COLLEGE EVENTS</div>


                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
                <div className="collapse navbar-collapse fixed-right" id="navbarNavDropdown" >

                    <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-dark" onClick={() => {
                                navigate('/');
                            }}
                                aria-current="page" href="">Home</a>
                        </li>

                        <li className="nav-item text-dark">
                            <a className="nav-link text-dark" href="#register">About Us</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#register">Contact Us</a>
                        </li>

                    </ul>
                </div>

                {/* <button type="button" href="#register" class="btn btn-outline-secondary  "> <a className="nav-link text-dark" href="#register">Register</a></button> */}
                <button type="button" class="btn btn-outline-secondary text-dark ">
                    <a className="nav-link text-dark" href="#register"> Sign Up</a>
                </button>
            </div>
        </nav>
    )
}
