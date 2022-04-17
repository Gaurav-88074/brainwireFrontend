import React from 'react'
import './HomePage.css'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const loginHandler =()=>{
        navigate("/Login");
    }
    const signupHandler =()=>{
        navigate("/Signup");
    }
    return (
        <div className='homePage'
            style={
                { 
                    backgroundImage: `url(${require("./homePage.png")})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat"
                }
            }
        >
        <header className='homePageHeader'>
            <nav className='hphs1'>

            </nav>
            <nav className='hphs2'>
                <div className='navItems'>
                    Home
                </div>
                <div className='navItems'>
                    Services
                </div>
                <div className='navItems'>
                    Question & Answer
                </div>
                <div className='navItems'>
                    Consultation
                </div>
                <div className='navItems'>
                    Article
                </div>
            </nav>
            <nav className='hphs3'>
                <button 
                    className='hphAuthSection'
                    onClick={loginHandler}
                > 
                    login
                </button>
                <button 
                    className='hphAuthSection hphAuthSignup'
                    onClick={signupHandler}
                > 
                    sign-up
                </button>
            </nav>
        </header>
        </div>
    )
}

export default HomePage