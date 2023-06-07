import React from 'react'
import { useMealContext } from '../../context/mealContext'
import './Category.scss'
import { Link } from 'react-router-dom';




const CategoryList = ({categories}) => {
 
  
  return (
    <div className='categories bg-whitesmoke py-4'>
      <div className="container">
         <h2 className='sc-title '>Category List</h2>
         <div className="categories-items grid">
         {
          categories?.map(category =>{
            const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail} = category;
           
            return(
           <Link to={`/meal/category/${title}`}>
              <div  key={id} className="category-item">
                  <img src={thumbnail} alt={title} className='category-img'/>
                  <h5 className='text-center py-3'>{title}</h5>
                  {/* <h5>{category.strCategoryDescription}</h5> */}
              </div>
            </Link>)
          })
         }
         </div>
      </div>
      
    </div>
  )
}

export default CategoryList