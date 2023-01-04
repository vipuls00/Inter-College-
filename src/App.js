import './App.css';
import React from 'react';
import Mainlogin from './components/mainlogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Teacherlogin from './components/teacherlogin';
import Loginform from './components/loginform';
import Adminhome from './components/adminhome';
import ManageEvent from './ManageEvent';
import Eventregister from './eventregister';
import Managestudents from './components/managestudents';
import Studentlogin from './components/studentlogin';
import Studentregister from './components/studentregister';
import StudentHome from './srudenthome';
import StudenteventRegister from './components/Studentregisterevent';
import ViewEvent from './components/viewevents';
import TeacherHome from './components/teacherhome';
import Manageregistered from './components/manageregistered';

function App() {

  return (
    <React.Fragment>
      <Router>
        {/* <NavBar></NavBar> */}
        <Routes >
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/mainlogin' exact element={<Mainlogin />}></Route>
          <Route path='/teacherlogin' exact element={<Teacherlogin />}></Route>
          <Route path='/studentlogin' exact element={<Studentlogin />}></Route>
          <Route path='/register' exact element={<Loginform />}></Route>
          <Route path='/studentregister' exact element={<Studentregister />}></Route>
          <Route path='/eventregister' exact element={<Eventregister/>}></Route>
          <Route path='/viewevent' exact element={<ViewEvent/>}></Route>
          <Route path='/registerforevent' exact element={<StudenteventRegister/>}></Route>
          <Route path='/adminhome' exact element={<Adminhome/>}></Route> 
          <Route path='/teacherhome' exact element={<TeacherHome/>}></Route> 
          <Route path='/studenthome' exact element={<StudentHome/>}></Route> 
          <Route path='/manageteacher' exact element={<Adminhome/>}></Route> 
          <Route path='/managestudents' exact element={<Managestudents/>}></Route> 
          <Route path='/manageregistered' exact element={<Manageregistered/>}></Route> 
          <Route path='/manageevent' exact element={<ManageEvent/>}></Route> 
        </Routes>
   
      </Router>

    </React.Fragment>
  );
}
export default App;
