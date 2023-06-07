
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Error, MealDetail, Category  } from './pages/index';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import MealSingle from './components/Meal/MealSingle';



function App() {
  return (
   
    <BrowserRouter>
        <Header/>       
        <SideBar/>
        <Routes>
          <Route path= '/' element= {<Home/>}/>
          <Route path= '*' element= {<Error/>}/>
          <Route path= '/meal/:id' element= {<MealDetail/>}/>
          <Route path= '/meal/:id' element= {<MealSingle/>}/>
          <Route path= '/meal/category/:name' element= {<Category/>}/>
        </Routes>
    </BrowserRouter>
  
    
  );
}

export default App;
