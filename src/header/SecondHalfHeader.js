import React from 'react'
import  './SecondHalfHeader.css'
import NavItem from '../components/NavItem'
const SecondHalfHeader = () => {
  return (
    <section className='secondHalfHeader'>
        <NavItem title = "Messages"/>
        <NavItem title = "Settings"/>
        
    </section>
  )
}

export default SecondHalfHeader;