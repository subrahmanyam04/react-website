import React from 'react';

import { Link } from "react-router-dom";



function Header() {
    return (

        <div >
            <nav className="navbar navbar-expand-md bar  fixed-top   " style={{borderBottom : "1px solid black"}}>
                
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="container "style={{ padding: "10px 0px"  }} >
                    <div className='container ms-md-4 me-md-5' >
                        <div className='row   ms-md-1 me-md-1 '>
                            <div className='col-md-3'>
                            <Link to="/" class="navbar-brand"><img  src='./assets/images/logo.png' height={20} width={160}  alt='medium logo'/></Link>
                                </div>
                            <div class="collapse navbar-collapse col-md-6 mx-md-auto " id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 Link" style={{fontSize:"14px"}}>
                                    <li class="nav-item ">
                                        {/* <a class="nav-link active font-monospace link-info" aria-current="page" href=".\home.html">Home</a> */}
                                        <Link to="/ourstory" className="nav-link " style={{ color: '#242424' }} target="_self">Our story</Link>
                                    </li>
                                    <li class="nav-item ">
                                        {/* <a class="nav-link font-monospace link-primary" href=".\About.html" target="_self"> About</a> */}
                                        <Link to="/membership" className="nav-link ms-md-2" style={{ color: '#242424' }}  target="_self">Membership</Link>
                                    </li>
                                    <li class="nav-item ">
                                        {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
                                        <Link to="/write" className="nav-link ms-md-2" style={{ color: '#242424' }} target="_self">Write</Link>
                                    </li>
                                    <li class="nav-item ">
                                        {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
                                        <Link to="/signin" className="nav-link ms-md-2" style={{ color: '#242424' }}  target="_self">Sign In</Link>
                                    </li>
                                    <li class="nav-item ">
                                        {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
                                        <button type='button' className=' border border-dark rounded-5  bg-dark ms-md-3 d-md-block' ><Link to="/getstarted" className="nav-link d-md-block" style={{ color: '#ffffff' }}  target="_self">Get Started</Link></button>
                                    </li>
                                </ul>
                           
                                
                            </div>
                           
                        </div>
                        
                    </div>
                    
                </div >
            </nav>
            
            <div ></div>

            
        </div>

    );
}
export default Header;