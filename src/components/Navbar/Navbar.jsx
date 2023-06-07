import React from 'react'
import'./Navbar.scss'
import { Link } from 'react-router-dom'
import {MdFoodBank } from 'react-icons/md'
import {IoMdMenu } from 'react-icons/io'
import { useSidebarContext } from '../../context/sidebarContext'




const Navbar = () => {
  const {openSidbar} = useSidebarContext();  

  return (
    <nav className='navbar bg-orange py-2 px-2 text-white' >
 
      <div className="container">
        <div className="nav-content flex align-center justify-between">
            
            <div className="home-icon">
              <Link to='/'><MdFoodBank/>
              <span>FastEat.</span>
              </Link>
            </div>
            <div className="nav-toggle">
              <button onClick={() => openSidbar()} className='text-white' type = "button"><IoMdMenu/></button>
            </div>
        </div>
        
      </div>

    </nav>
    
  )
  
}

export default Navbar