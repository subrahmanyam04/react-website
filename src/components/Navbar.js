import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import signInWithGoogle from '../pages/GetStarted'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  console.log(error);

  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut().then(() => {
      console.log('successfully logged out');
      navigate('/');
    }).catch((err) => {
      console.log(err);
    })
  }
  return (

    <div>
      <nav className="navbar navbar-expand-sm bag  ">
        <div class="container-fluid">
          <div className='row    '>
            <div className='col-md-3'>
              <div >
                <Link to="/" class="navbar-brand d-none d-lg-block d-md-block d-xl-block d-xxl-block"><img className='mt-1' src='./assets/images/logos.png' alt='' height={40} width={40}/></Link>
              </div>
            </div>
            <div className='col-md-9 col-9 d-flex  '>
              <Icon icon="iconamoon:search-thin" className='mt-xxl-3 mt-md-3  mt-2' width="24" height="24" /><input class="form-control custom-input search border-0 " type="search" placeholder="Search Medium" aria-label="Search" />
            </div>
            <div className='col-2 dropdown list-group d-xxl-none d-xl-none d-md-none d-lg-none d-block'>
            <Link to="" className="nav-link  font-monospace link-dark" target="_self"><img className='rounded-5 rounded' height={30} width={30} src={localStorage.getItem("profilePic")}  alt=''/></Link>
              </div>
            <div className='col-1 mt-1 dropdown list-group d-xxl-none d-xl-none d-md-none d-lg-none d-block'>
                {/* <li class=" dropdown list-group "> */}
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" />


                  <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><button class="dropdown-item" onClick={handleLogout}>logout</button></li>
                  </ul>
                {/* </li> */}
              </div>
            </div>
            </div>
            <div className='container'>
            <div className='row  '>
       
              
            
            </div>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">

              <li class="nav-item Link" >
                {/* <a class="nav-link active font-monospace link-info" aria-current="page" href=".\home.html">Home</a> */}
                <Link to="" className="nav-link active font-monospace link-dark mt-1" target="_self" style={{ fontSize: "14px", color: "#6B6B6B" }}><Icon icon="streamline:interface-edit-write-2-change-document-edit-modify-paper-pencil-write-writing" width="20" height="20" /> <span className='Link ' style={{ color: "#6B6B6B" }}> Write</span></Link>
              </li>
              <li class="nav-item ">
                {/* <a class="nav-link font-monospace link-primary" href=".\About.html" target="_self"> About</a> */}
                <Link to="" className="nav-link  font-monospace link-dark" target="_self"><Icon icon="ph:bell-thin" width="24" height="24" /></Link>
              </li>
              <li class="nav-item ">
                {/* <a class="nav-link font-monospace link-primary" href=".\catagory.html" target="_self"> Catagories</a> */}
                <Link to="" className="nav-link  font-monospace link-dark" target="_self"><img className='rounded-5 rounded' height={30} width={30} src={localStorage.getItem("profilePic")}  alt=''/></Link>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" />


                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item">Action</a></li>
                  <li><a class="dropdown-item" >Another action</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><button class="dropdown-item" onClick={handleLogout}>
                    <p>{localStorage.getItem("email")}</p>
                    logout</button></li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>



      
      




    </div>

  );
}
export default Navbar;