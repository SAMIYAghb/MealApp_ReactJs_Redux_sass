
import React, {createContext, useContext, useReducer} from 'react';
import {OPEN_SIDEBAR, CLOSE_SIDEBAR} from './../actions/actions';
import reducer from './../reducers/SidebarReducer';
    

const initialState = {
    isSidebarOpen: false,
}

const SidebarContext = createContext({});

export const SidebarProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    const openSidbar = ()=>{
        dispatch({type:OPEN_SIDEBAR})
    }
    const closeSidbar = ()=>{
        dispatch({type:CLOSE_SIDEBAR})
    }

    return(
        <SidebarContext.Provider value={{...state, openSidbar, closeSidbar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebarContext = () => {
    return useContext(SidebarContext);
}