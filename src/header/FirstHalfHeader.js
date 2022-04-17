import React from 'react'
import  './FirstHalfHeader.css'
import NavItem from '../components/NavItem'
const FirstHalfHeader = () => {
  return (
    <section className='firstHalfHeader'>
        <NavItem title = "Dashboard"/>
        <NavItem title = "Statistics"/>
        <NavItem title = "Patients"/>
        <NavItem title = "Doctors"/>
        <NavItem title = "Medicines"/>
    </section>
  )
}

export default FirstHalfHeader