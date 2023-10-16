import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Membership from './pages/Membership';
import Write from './pages/Write';
import SignIn from './pages/Signin';
import GetStarted from './pages/GetStarted';
import Registartion from './pages/Registration';
import Secondpage from './pages/Secondpage'
import AboutCardDetails from './pages/AboutCardDetails';
import Following from './components/Following';



function App() {
  return (
    <div >
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/ourStory' element={<OurStory/>}></Route>
        <Route path='/membership' element={<Membership/>}></Route>
        <Route path='/write' element={<Write/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/getstarted' element={<GetStarted/>}></Route>
        <Route path='/registration' element={<Registartion/>}></Route>
        <Route path='/secondpage' element={<Secondpage/>}></Route>
        <Route path='/aboutcard' element={<AboutCardDetails/>}></Route>

      </Routes>
   
    </div>
  );
}

export default App;
