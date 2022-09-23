import {  createContext, useContext, useReducer } from "react";

export const Context= createContext();

export const StateProvider = ({ children, reducer, initialState})=>(
    <Context.Provider value={useReducer(reducer,initialState)}>{children}</Context.Provider>
    

);
export const useStateValue=()=>useContext(Context);