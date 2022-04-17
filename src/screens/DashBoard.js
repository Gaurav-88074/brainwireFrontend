import React from 'react'
import './DashBoard.css'
const DashBoard = () => {
  return (
    <div className='dashboard'>
      <header className='dashboardHeader'>
        <div className="dashOverview">
          <div className="dashOverViewHead">
              Overview
          </div>
          <div className="dashOverViewData">
            Welcome Back ,Gaurav
          </div>
        </div>
        <button className="registerPatient">
          + Register Patient
        </button>
      </header>
      <section className='dashboardSection1'>
        <header className='ds1_1'> 
          <div className='ds1_1_1'>

          </div>
          <div className='ds1_1_1'>

          </div>
          <div className='ds1_1_1'>

          </div>
        </header>
        <section className='ds1_2'>
          <div className='ds1_2_1'>
            
          </div>
        </section>
      </section>
      <section className='dashboardSection2'>
        <div className='ds2_1'>
          
        </div>
      </section>
    </div>
  )
}

export default DashBoard