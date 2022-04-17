import React from 'react';
import background from "./logo.png";
import './Header.css'
const Header = () => {
  console.log(background);
  return (
    <header className='header'>
      <section className="heading">
        <div className="logo"
          style={
            { 
              backgroundImage: `url(${require("./logo.png")})`,
              backgroundSize: "contain" ,
              backgroundRepeat: "no-repeat"
            }
          }
        >

        </div>
      </section>
      <section className="freeSpace">
        
      </section>
      <section className="userSection">
        User Section
      </section>
    </header>
  )
}

export default Header