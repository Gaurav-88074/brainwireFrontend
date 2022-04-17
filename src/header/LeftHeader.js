import React from 'react';
import './LeftHeader.css';
import NavItem from '../components/NavItem';
import FirstHalfHeader from './FirstHalfHeader';
import SecondHalfHeader from './SecondHalfHeader'
const LeftHeader = () => {
  return (
    <div className='leftHeader'>
        <FirstHalfHeader />
        <SecondHalfHeader />
    </div>
  )
}

export default LeftHeader