import React from "react";
import { Link } from "react-router-dom";

const Banner = () =>{
    return(
        <div>
            <div className="container-fluid " style={{backgroundColor : "#ffc017", borderBottom : "1px solid black" }}>
                <div className="row mx-xl-auto ">


                    <div className="col-xl-1 col-lg-1   col-md-1">
                          
                        </div>


                        <div className="col-lg-7 col-xl-5 col-xxl-6 mt-5 mt-lg-3 mt-xl-3  mb-5 mb-xxl-1 mb-xl-1 mb-lg-1 mb-md-2 mt-md-4">
                          <div className="row mt-md-5 mt-5  mb-md-2 mb-lg-4 pt-md-4">  
                          <h2 className="h2family sm-fs-3 " style={{fontSize :"103px" }}>Stay curious.</h2>
                          </div>
                          <div className="row">  
                          <div className="col-md-9 mb-md-4 mt-3 mb-5">
                          <h3 style={{fontSize:"24px",color:"#242424"}} className="Link">Discover stories, thinking, and expertise from writers on any topic.</h3>
                          </div>
                          </div>
                          <div className="row"> 
                          <div className="col-md-8  mb-md-4 mb-lg-4 mt-md-3 mb-5"> 
                          <button className=" rounded-5 mb-xl-5 mb-md-5" style={{padding:"6px 49px" ,backgroundColor:"#191919" ,border:"#191919"}}><Link to="/getstarted" className="Link text-decoration-none" style={{fontSize:"20px", color:"#ffffff"}}>Start Reading</Link></button>
                          </div>
                          </div>
                        </div>


                        <div className="col-xl-1 d-xxl-none d-lg-none">
                          
                        </div>


                        <div className="col-xl-4 col-lg-4 ms-xl-5 col-xxl-4 ">
                                <img src="./assets/images/banner1.png" className="img d-md-none  d-lg-block d-none" alt="banner" height="475px" width="540px"/>
                            
                        </div>

                </div>
                </div>
        </div>
    )
}

export default Banner;