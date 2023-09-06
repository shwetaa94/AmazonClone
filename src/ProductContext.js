//set up data layer
//we need this to track the basket
import React,{ createContext, useContext, useReducer} from 'react'

// this is data layer ---warehouse
export const AppContext = createContext();
//build a provider ---our deleievrboy
export const AppProvider = ( {reducer,initialState,children} ) => {
   return(
    <AppContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </AppContext.Provider>
);
}
export const useAppValue=()=>useContext(AppContext);