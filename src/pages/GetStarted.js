import React from "react";
import "font-awesome/css/font-awesome.css";
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

import { auth } from '../firebase';
import {provider , providerFb} from '../firebase';
import {  signInWithPopup } from "firebase/auth";
import { useNavigate} from 'react-router-dom';
const GetStarted = () => {

    const navigate = useNavigate();

// google authentication
 const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            
            console.log(',pmvdmvps,mxmamcsc,lkd',result)
            navigate('/secondpage');
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
      
            localStorage.setItem("name", name);
            console.log("name is ", name) 
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            console.log("name is ", profilePic)
          })
          .catch((error) => {
            console.log(error);
          });
      };


      const signInWithFacebook = () => {
        signInWithPopup(auth, providerFb)
          .then((result) => {
            console.log(result ,'result is this')
            navigate('/secondpage');
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
      
            localStorage.setItem("name", name);
            console.log("name is ", name)
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
          })
          .catch((error) => {
            console.log(error);
          });
      };



    return (

        <div>


            
            <div className='container'>

                <div className='col-md-6 mx-auto mb-5 mt-5'>

                    <div className='card p-2'>

                        <div className="row mx-auto mb-md-5">

                            <div className="col-3">
                                <Link to="/" ><Icon icon="material-symbols:close" className="position-absolute top-0 end-0 icon" color="#6B6B6B" width="22" height="35" /></Link>
                            </div>
                        </div>

                        <h2 className="h2family text-center mt-md-5 mb-md-5">Join Medium</h2>
                        <div className='row mx-auto'>
                            <div className="col-md-12 p-2 ">
                                <button class="btn border border-dark rounded rounded-5 p-2  Link section" type="button" onClick={signInWithGoogle}>

                                    <div className="row">
                                        <div className="col-1 ms-lg-1 ">
                                            <Icon icon="logos:google-icon" />
                                        </div>
                                        <div className="col-1 ms-1 ms-lg-2  ">

                                        </div>
                                        <div className="col ms-1 ms-md-3 ms-lg-1 me-lg-4">
                                            Sign in with Google
                                        </div>
                                        <div className="col-1 me-2">

                                        </div>

                                    </div>


                                </button>
                            </div>

                        </div>

                        <div className='row mx-auto'>
                            <div className="col-md-12 mt-2 ">
                                <button class="btn border border-dark rounded rounded-5 p-2  Link section" type="button" onClick={signInWithFacebook}>

                                    <div className="row">
                                        <div className="col-1 ms-lg-1 ">
                                            <Icon icon="logos:facebook" />
                                        </div>
                                        <div className="col-1 ">

                                        </div>
                                        <div className="col ms-lg-1  me-lg-4">
                                            Sign in with Facebook
                                        </div>
                                        <div className="col-1">

                                        </div>

                                    </div>


                                </button>
                            </div>

                        </div>


                        <div className='row mx-auto'>
                            <div className="col-md-12 mt-3 ">
                                <Link to='/registration'>
                                <button class="btn border border-dark rounded rounded-5 p-2  Link section" type="button">

                                    <div className="row">
                                        <div className="col-1 ms-1 ms-lg-2">
                                            <Icon icon="iconamoon:email-thin" />
                                        </div>
                                        <div className="col-1 ">

                                        </div>
                                        <div className="col ms-2 me-3 ms-lg-2 ms-md-3 me-md-3 me-lg-5">
                                            Sign in with Email
                                        </div>
                                        <div className="col-1 ">

                                        </div>

                                    </div>


                                </button>
                                </Link>
                            </div>

                        </div>




                        <p className="text-center mt-lg-4 mt-md-4 mt-4 Link section">Already have an account?<span style={{color:"#1A8917"}}><b>Sign in</b></span></p>

                            <div className="row text-center mt-lg-5 mb-lg-5 justify-content-center">
                                <div className="col-9 mt-lg-5 mb-lg-5   ">
                                        <p className="Link" style={{fontSize:"13px" , color:"#6B6B6B"}}>Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
                                </div>
                                </div>

                    </div>
                
                </div>

                   
            </div>



        </div>


   

    )

}

export default GetStarted;