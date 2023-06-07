import React, { useEffect } from 'react'
import { useMealContext } from '../../context/mealContext';
import HomePage from './../HomePage/HomePage';
import MealSingle from './../../components/Meal/MealSingle';
import { useParams } from 'react-router-dom';
import { startFetchSingleMeal } from '../../actions/mealsActions';
import Loader from '../../components/Loader/Loader';


const MealDetailPage = () => {
  const {id} = useParams();
  // console.log(id);
  const {categories, dispatch, meal, mealLoading, mealError } = useMealContext();
  // console.log(meal);

  useEffect(() => {
    startFetchSingleMeal(dispatch, id);
  }, [id]);

 

  return (
    <div className='meal-detail-page'>
    
          {
             (mealLoading) ? <Loader/>:
            (meal) ? <MealSingle meal = {meal} /> :<HomePage/>
            
          }
    </div>
  )
}

export default MealDetailPage