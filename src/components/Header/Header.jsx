import React from 'react'
import './Header.scss'


import Navbar from './../Navbar/Navbar';
import SearchForm from './../SearchForm/SearchForm';



const Header = () => {
  return (
    <header className='header'>
        <Navbar/>
        <SearchForm/>
    </header>
    
  )
}

export default Header