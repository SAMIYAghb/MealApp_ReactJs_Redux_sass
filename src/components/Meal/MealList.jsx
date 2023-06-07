import React from 'react'
import { Link } from 'react-router-dom';
import './Meal.scss'



const MealList = ( { meals} ) => {
  console.log(meals);

  return (
    
    <div className='meal-list py-4'>
      <div className="container">
      <h2 className='sc-title'>Meals List </h2>
        <div className="meals-items grid">
            {
            meals?.map(mealItem=>{

              const {idMeal:id, strArea: area, strCategory: category, strMeal: meal, strMealThumb: thumbnail} = mealItem;
            
              return(<>
                
                <Link to={`/meal/${id}`}>
                  <div  key={id} className="category-item meal-item">
                      <h4 className="my-3 px-2">{category} </h4>
                      <img src={thumbnail} alt={meal} className='category-img'/>
                      <h3 className="px-2 my-3 fs-16">{meal} </h3>
                      <p className="px-2 my-2 fs-14">{area} </p>
                  </div>
                </Link>
                
                </>)
            }) 
          
              }
        </div>
      </div>
    </div>
  )
}

export default MealList