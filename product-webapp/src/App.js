import React from 'react';
import './App.css';

//import PatientLanding from './components/patient-profile/pateintlanding/PatientLanding';
import UserHome from './components/userlanding/UserHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientLanding from './components/patient-profile/pateintlanding/PatientLanding';
import HomePage from './components/common/HomePage';
import Main from './components/doctor-profile/Main';
//import SideNavBar from './components/common/Sidebar';
import Pateintroute from './components/patient-profile/components/Pateintroute';
import Profile from './components/patient-profile/pages/Profile'
import Support from './components/patient-profile/pages/Support';
import Appointments from './components/patient-profile/pages/Appointments';
//import Login from './components/login/Login';
import Login2 from './components/login/Login2';
import Register from './components/register/Register';
import DoctorsList from './components/patient-profile/pages/DoctorsList';
import BookSlot from './components/patient-profile/pages/BookSlot';
import ViewSlot from './components/doctor-profile/Pages/ViewSlot';
import CreatSlot from './components/doctor-profile/Pages/CreateSlot';



function App() {
  return (
    <>
     
      {/* <Pateintroute/>   */}
    {/* <UserHome/>  */}
    {/* <SideNavBar/> */}
     {/* <Main/>    */}
      {/* <HomePage/> */}
     {/* <PatientLanding/> */}
     <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserHome />} /> 
        <Route path="/patient" element={<PatientLanding />} />
        <Route path="doctor" element={<HomePage/>} >
           <Route path="profile" element={<Main/>}/>
           <Route path="viewslot" element={<ViewSlot/>}/>
           <Route path="createslot" element={<CreatSlot/>}/>
        </Route>
       
       
     

       <Route path="patientpro" element={<Pateintroute/>}>
       <Route path="appointment" element={<Appointments />} />
        <Route path="support" element={<Support />} />
        <Route path="profile" element={<Profile />} />
        <Route path="availabledoctors" element={<DoctorsList/>}/>
        <Route path="bookslot" element={<BookSlot/>}/>
      </Route > 

      <Route path='/login' element={<Login2/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
