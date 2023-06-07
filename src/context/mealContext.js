import React, { createContext , useContext, useEffect, useReducer} from "react"
import MealReducer from './../reducers/mealReducer';
import { startFetchCategories } from './../actions/mealsActions';



const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,

    //serach
    meals: [],
    mealsLoading: false,
    mealsError: false,

    //meals of each category
    categoryMeals: [],
    categoryMealsLoading: false,
    categoryMealsError: false,

    //single meal
    meal: [],
    mealLoading: false,
    mealError: false
  };

 const MealContext = createContext({});

export const MealProvider =({children})=>{
    const [state, dispatch] = useReducer(MealReducer, initialState)

    useEffect(() => {
       startFetchCategories(dispatch)
      }
    , [])


    return(
        <MealContext.Provider value={{
            ...state,
            dispatch,
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
    
}


export const useMealContext = ()=>{
    return useContext(MealContext)
}
