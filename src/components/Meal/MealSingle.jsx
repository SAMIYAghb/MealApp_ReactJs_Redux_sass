import React from 'react'
import './MealSingle.scss'
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const MealSingle = ({meal}) => {
    // console.log(meal);
    // console.log(meal[0].strMeal);
   
  return (
    
    <div className='meal-single meals-items'>
        <div className="container">
            <div className="single-nav bg-orange text-white">
                <ul className='flex align-center my-3'>
                    <li className=''>
                        <Link to = "/" className='flex align-center'>
                            <AiFillHome size = {22} className='home-icon'/>
                        </Link>
                    </li>
                    <li className='flex align-center mx-1'>
                        <BiChevronsRight size = {23} />
                    </li>
                    <li className=' flex'>
                    {/* <span to = "" className='fs-15 fw-5 text-uppercase'>{meal?.title}</span> */}
                    </li>
                </ul>
            </div>
            <h2 className='sc-title my-4'>MEAL DETAILS </h2>

            <div className="flex single-meal-detail">
                <div className=" left">
                    <div className="info">
                        <h1 className='my-3'>{meal[0]?.strMeal}</h1>
                        <p><span>CATEGORY:</span> {meal[0]?.strCategory}</p> 
                        <p><span>Source:</span><br/> 
                            <a href = {meal[0]?.strSource}>
                                
                                {meal[0]?.strSource ? meal[0]?.strSource.substring(0, 20) + "..." : "Not found" }
                            </a>
                        </p>
                        <p>{meal[0]?.strArea}</p>
                        <div className="tags">
                            <span>{meal[0]?.strTags}</span>
                        </div>
                    </div>
                    <div className="ingredient">
                        <h4 className=''>Ingredients:</h4>
                        <p>{meal[0]?.strIngredient1}</p>
                        <p>{meal[0]?.strIngredient2}</p>
                        <p>{meal[0]?.strIngredient3}</p>
                        <p>{meal[0]?.strIngredient4}</p>
                        <p>{meal[0]?.strIngredient5}</p>
                        <p>{meal[0]?.strIngredient6}</p>
                    </div>
                </div>
                <div className="right">
                        <img class='details-img' src={meal[0]?.strMealThumb} alt="" />
                </div>
            </div>

            <div className="instruction">
                <p>{meal[0]?.strInstructions}</p>
            </div>
        </div>
    </div>
  )
}

export default MealSingle