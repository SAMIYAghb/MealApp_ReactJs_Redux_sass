import React , {useEffect} from 'react'
import './CategoryPage.scss'
import { useMealContext } from '../../context/mealContext';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';
import MealList from './../../components/Meal/MealList';




const CategoryPage = () => {
  const {categoryMeals, dispatch, categories}= useMealContext();
  console.log(categoryMeals);
  // console.log(categories);

  const {name} = useParams();
  // console.log(name);

  let catDescription = "";

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (<>
    <main className='main-content py-5'>
      <div className='container'>
        <div className='px-4 py-4'>
          <h2 className='text-orange fw-8'>{name}</h2>
          <p className='fs-18 '>{catDescription}</p>
        <div className="">
      {
        (categoryMeals?.length) ? <MealList meals = {categoryMeals} /> : null
      }
      </div>
        </div>
      </div>
      
    </main>
    </>)
}

export default CategoryPage

