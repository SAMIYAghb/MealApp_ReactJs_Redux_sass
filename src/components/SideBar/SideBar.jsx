import React from 'react'
import { useSidebarContext } from '../../context/sidebarContext';
import { useMealContext } from '../../context/mealContext';
import {ImCancelCircle} from 'react-icons/im';
import { Link } from 'react-router-dom';
import './SideBar.scss'


const SideBar = () => {
    const {isSidebarOpen, closeSidbar} = useSidebarContext();

    const { categories } = useMealContext();   

  return (
          <nav className={`sidebar ${isSidebarOpen
             ?
           'sidebar-visible' : ""}`}>
              <button onClick={()=>closeSidbar()} type = "button" className='close-btn' >
                <ImCancelCircle/>
              </button>
          
              <div className="side-content">
                  <ul className='side-nav'>
                    <h3 className='sidebar-title'>Categories</h3>
                  {
                        categories.map(category => (
                            <li className='side-item' key = {category.idCategory}>
                                <Link to = {`/meal/category/${category.strCategory}`}
                                 className='side-link ls-1 fs-13'
                                 onClick={() => closeSidbar()}>
                                    {category.strCategory}
                                </Link>
                            </li>
                        ))
                    }
                  </ul>
              </div>
          </nav>
      
  )
}

export default SideBar