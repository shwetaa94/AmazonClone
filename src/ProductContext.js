import React,{Children, createContext, useEffect, useReducer} from 'react'

const AppContext = createContext();
// const API="https://api.pujakaitem.com/api/products";


const AppProvider = ( {children} ) => {
    

return(
    <AppContext.Provider value="shweta">
        {children}
    </AppContext.Provider>
);
}
export {AppContext,AppProvider}