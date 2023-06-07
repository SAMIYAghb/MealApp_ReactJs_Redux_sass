import React from 'react'
import CategoryList from './../../components/Category/CategoryList';
import { useMealContext } from '../../context/mealContext';
import MealList from './../../components/Meal/MealList';
import Loader from './../../components/Loader/Loader';
import NotFound from './../../components/NotFound/NotFound';

const HomePage = () => {
  const {categories, categoryLoading, categoryError,meals, mealsLoading, mealsError } = useMealContext();
  // console.log(categories);
// console.log(meals);
  return (
<main className='main-content'>

    {
    (mealsLoading) ? <Loader/>
     : 
     (meals === null) ? <NotFound/> 
     : 
     (meals?.length ) ? <MealList  meals = {meals}/>
     : 
     ""}
    {(categoryLoading) ? <Loader/> : <CategoryList categories= {categories}/>}
  
</main>
  )
}

export default HomePage