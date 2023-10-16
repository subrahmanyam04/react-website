import React from "react";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "font-awesome/css/font-awesome.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate, useLocation } from 'react-router-dom';
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
const Registartion = () => {

    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const {search} = location;
  
    const [email, setEmail] = useState('');
  

  
    const [infoMsg, setInfoMsg] = useState('');
  
    


    useEffect(()=>{
        if(user){
          // user is already signed in
          navigate('/');
        }
        else{
          // user is not signed in but the link is valid
          if(isSignInWithEmailLink(auth, window.location.href)){
            // now in case user clicks the email link on a different device, we will ask for email confirmation
            let email = localStorage.getItem('email');
            if(!email){
              email = window.prompt('Please provide your email');
            }
            // after that we will complete the login process
           
            signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
            .then((result)=>{
              // we can get the user from result.user but no need in this case
              console.log(result.user);
              localStorage.removeItem('email');
              
             
              navigate('/');
            }).catch((err)=>{
             
              navigate('/login');
            })
          }
          else{
            console.log('enter email and sign in');
          }
        }
      },[user, search, navigate]);

      
    
      const handleLogin=(e)=>{
        e.preventDefault();
     
        sendSignInLinkToEmail(auth, email, {
          // this is the URL that we will redirect back to after clicking on the link in mailbox
          url: 'http://localhost:3000/secondpage',
          handleCodeInApp: true,
        }).then(()=>{
          localStorage.setItem('email', email);
          // toast.success('We have sent you an email with a link to sign in');
          setInfoMsg('We have sent you an email with a link to sign in');
        }).catch(err=>{
          
         console.log('error in login')
        })
      }
 
      // toast.configure();

    return (








        <div>



            <div className='container'>

                <div className='col-md-6 mx-auto mb-5 mt-5'>

                    <div className='card px-2 py-3'>

                        <div className="row mx-auto mb-md-5">

                            <div className="col-3">
                                <Link to="/" ><Icon icon="material-symbols:close" className="position-absolute top-0 end-0 icon" color="#6B6B6B" width="22" height="35" /></Link>
                            </div>
                        </div>

                        <h2 className="h2family text-center mt-md-5 " style={{ fontSize: "28px" }}>Sign up with email</h2>


                        <div className="row text-center justify-content-center mt-lg-4 mt-md-3 mt-4 mb-lg-2">
                            <div className="col-md-10 col-lg-8 col-xl-6">
                                <h4 className="Link section" style={{ fontSize: '16px' }}>Enter your email address to create an account.</h4>
                            </div>
                        </div>

                        <div className="row text-center justify-content-center mt-lg-5 mt-md-3 mt-3">
                            <div className="col-6 Link section" style={{ fontSize: "13px" }}>
                                Your email
                            </div>
                        </div>

                        {/* input */}

                        <div className="row  justify-content-center mt-1">
                            <div className="col-6 Link section" >
                                <input type="text" className="form-control border-0 rounded-0 border-bottom border-dark text-center custom-input " value={email||''} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="row mx-auto justify-content-center mt-lg-5 mt-md-4 mt-4 mb-1">
                            <div className="col-12 Link section" >
                                <button className="Link rounded-5 " onClick={handleLogin} style={{ backgroundColor: "#191919", color: "#ffffff", padding: '8px 16px', fontSize: '14px' }}><span className="ms-5 me-5 px-4 " >Continue</span></button>
                            </div>
                        </div>

                        <div className="row mx-auto justify-content-center mt-lg-3 mt-md-3 mt-3 mb-5 mb-md-5 mb-lg-5">
                            <div className="col-12 mb-lg-5" >
                                <Link to='/GetStarted'> <button className="Link border-0 fw-normal mb-lg-5 " style={{ backgroundColor: "white", color: "#1A8917", fontSize: '14px' }}><span className="ms-4 me-4 px-4 " >  <Icon icon="eva:arrow-ios-back-fill" width="19" height="19" />All sign up options</span></button></Link>
                            </div>
                        </div>

                    </div>

                </div>


            </div>



        </div>




    )

}

export default Registartion;