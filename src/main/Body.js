import React from 'react';
import './Body.css';
import LeftHeader from '../header/LeftHeader';
import ScreenSection from '../components/ScreenSection';
const Body = () => {
  return (
    <div className='body'>
        <LeftHeader/>
        <ScreenSection/>
    </div>
  )
}

export default Body