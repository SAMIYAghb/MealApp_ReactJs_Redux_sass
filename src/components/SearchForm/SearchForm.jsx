import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './SearchForm.scss'
import { useMealContext } from '../../context/mealContext'
import { useNavigate } from 'react-router-dom'
import { startFetchMealsBySearch } from '../../actions/mealsActions'
import { SEARCH_URL } from '../../utils/constants'


const SearchForm = () => {
  const navigate = useNavigate();
  const [searchForm, setSearchForm] = useState('')
  const [error, setError] = useState(null);
  const {dispatch, meals} = useMealContext();

  // console.log(meals);
  const handleInput =(e)=>{
    
    if((e.target.value.replace(/[^\w\s]/gi, "")).length !==0){
      setSearchForm(e.target.value)
      // console.log(searchForm);
      setError('')
    }else{
      setError('Invalid search term ...')
    }  
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    navigate("/");
    startFetchMealsBySearch(dispatch, searchForm)
  }

  return (
    <div className='search-form'>
      <div className="form-detail">
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
          <input onChange={(e) => handleInput(e)} value={searchForm} type="text" placeholder='Search recipes here...'/>
          <button type="submit"><AiOutlineSearch/></button>
        </form>
      <h2 className='py-4'>What are your favorite cuisines?</h2>
      <h5>PERSONALIZE YOUR EXPERIENCE</h5>
      </div>
      
    </div>
  )
}

export default SearchForm