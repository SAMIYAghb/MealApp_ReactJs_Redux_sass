import { FETCH_CATEGORY_BEGIN,FETCH_CATEGORY_SUCCESS,FETCH_CATEGORY_ERROR
,FETCH_MEALS_BEGIN, FETCH_MEALS_SUCCESS,FETCH_MEALS_ERROR,  FETCH_SINGLE_MEAL_BEGIN,FETCH_SINGLE_MEAL_SUCCESS, FETCH_SINGLE_MEAL_ERROR , FETCH_CATEGORY_MEALS_BEGIN,FETCH_CATEGORY_MEALS_SUCCESS, FETCH_CATEGORY_MEALS_ERROR } from './../actions/actions';



 const MealReducer = (state, action) => {
    const { type, payload } = action;

    
	switch (type) {
        // fetch categories
        case FETCH_CATEGORY_BEGIN:
            return {
                ...state,
                categoryLoading: true
            }
        case FETCH_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: action.payload,
                categoryLoading: false
            }
        case FETCH_CATEGORY_ERROR:
            return {
                ...state,
                categoryLoading: false,
                categoryError: true
            }


        // fetch meals By search
        case FETCH_MEALS_BEGIN:
            return {
                ...state,
                mealsLoading: true
            }  
        case FETCH_MEALS_SUCCESS:
            // console.log(action.payload);
            return {
                ...state,
                meals : action.payload,
                mealsLoading: false
            }           
            case FETCH_MEALS_ERROR:
                return {
                    ...state,
                    mealsLoading: false,
                    mealsError : true
                } 
               
                
        // fetch single meal   
        case FETCH_SINGLE_MEAL_BEGIN:
            return {
                ...state,
                mealLoading: true
            } 
        case FETCH_SINGLE_MEAL_SUCCESS:
            // console.log(action.payload); 
            return {
                    ...state,
                    mealLoading: false,
                    meal : action.payload         
            }         
        case FETCH_SINGLE_MEAL_ERROR:
            return {
                    ...state,
                    mealLoading: false,                   
                    mealError: true,
            } 


        //fetch meals by category
        case FETCH_CATEGORY_MEALS_BEGIN:
            return{
                ...state,
                categoryMealsLoading :true
        }
        case FETCH_CATEGORY_MEALS_SUCCESS:
            console.log(action.payload); 
            return{
                ...state,
                categoryMealsLoading :false,
                categoryMeals: action.paylod
        }
        case FETCH_CATEGORY_MEALS_ERROR:
            return{
                ...state,
                categoryMealsLoading :false,
                categoryMealsError: true
        }


        default:
            return state;
	}
  }
  
  export default MealReducer