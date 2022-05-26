import React, {createContext,useState, useEffect, useReducer} from 'react';
import Inscription from '../authentification/Inscription';
import { reducer } from './Reducer';

export const StateContext = createContext();

const State = ({children}) => {

    // get datas from localStorage
    const savedAuthentification = JSON.parse(localStorage.getItem("authentification"));

    // initialize the state: authentification according to the result of savedAuthentification
    const [authentification, setAuthentification] = useState(savedAuthentification ? savedAuthentification : {inscriptions:[]} );

   






    // get datas from localStorage
    const savedBudget = JSON.parse(localStorage.getItem("budget"));
    
    // initialize the state: budget according to the result of savedBudget
    const [budget, setBudget] = useState(savedBudget ? savedBudget : 0);

    // get datas from localStorage
    const savedTransactions = JSON.parse(localStorage.getItem("transactions"));


    function initialState() {
      
        // initialize the state: transaction according to the result of savedTransactions
        if(savedTransactions) {
          return savedTransactions;
        } else {
          return {
            depense: [],
            revenu: []
          };
        }
    }

    const stateTransaction = initialState();

    // configure state transactions according to the value of savedTransactions
    const [transactions, dispatch] = useReducer(reducer, stateTransaction)
    
    function addTransaction(transaction, type) {

      dispatch(
        {
          type : type,
          transaction: transaction
        }
      );
    }
    

    useEffect (() => {

      localStorage.setItem("authentification", JSON.stringify(authentification));

        localStorage.setItem("transactions", JSON.stringify(transactions));
        localStorage.setItem("budget", JSON.stringify(budget));
    }, [transactions, budget, authentification]);


  return (
    <StateContext.Provider value={{budget, setBudget, transactions, addTransaction, authentification, setAuthentification}}>
        {children}
    </StateContext.Provider>
  )
}

export default State