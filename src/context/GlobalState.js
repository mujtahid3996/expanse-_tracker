import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from './AppReducer'
//initialstate
const initialstate = {
    transactions:  []
}
//create context
export const GlobalContext = createContext(initialstate)

//provider context

export const GlobalProvider = ({children}) =>{
    const [state,dispatch] =useReducer(AppReducer,initialstate)
    //actions
    const deleteTransaction =(id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    
    }
    const addTransaction =(transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }
    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>)
}