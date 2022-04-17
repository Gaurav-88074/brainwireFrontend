import React from 'react';
import './ScreenSection.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import DashBoard from '../screens/DashBoard';
import Doctors from '../screens/Doctors';
import Messages from '../screens/Messages';
import Patients from '../screens/Patients';
import Setting from '../screens/Setting';
import Statistics from '../screens/Statistics';
import Medicines from '../screens/Medicines';
const ScreenSection = () => {
  
  return (
    <section className = 'screenSection' >
        <Routes>
          {/* <Route path="User" element ={<Navigate to='User/Dashboard'/>}/> */}
          <Route path="/Dashboard"  element ={<DashBoard/>}/>
          <Route path="/Statistics" element ={<Statistics/>}/>
          <Route path="/Patients"   element ={<Patients/>}/>
          <Route path="/Doctors"    element ={<Doctors/>}/>
          <Route path="/Messages"   element ={<Messages/>}/>
          <Route path="/Settings"   element ={<Setting/>}/>
          <Route path="/Medicines"  element ={<Medicines/>}/>
        </Routes>
    </section>
  )
}

export default ScreenSection