import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MealProvider } from './context/mealContext';
import { SidebarProvider } from './context/sidebarContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <SidebarProvider>
        <MealProvider>
            <App />
        </MealProvider>
    </SidebarProvider> 
    

);


