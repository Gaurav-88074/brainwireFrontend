import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavItem.css'
const NavItem = (props) => {
  return (
    <NavLink
        className={(navData)=>{
          if (navData.isActive){
            return 'navItemActive'
          }
          return 'navItem'
        }}
        to={props.title}
    >
      {props.title}
      
    </NavLink>
  )
}

export default NavItem