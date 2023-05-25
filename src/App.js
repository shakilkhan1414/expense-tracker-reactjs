import './App.css';
import { NewExpense } from './components/NewExpense/NewExpense';
import { Expenses } from './components/Expenses/Expenses';
import { useState,useEffect } from 'react';
import axios from 'axios';


function App() {
  const[expenses,setExpenses]=useState([])

  useEffect(()=>{
    axios.get('https://expense-tracker-cda0f-default-rtdb.firebaseio.com/expenses.json')
    .then(res=>{
      const responseData=res.data
      const loadExpenses=[]
      for (let key in responseData) {
        loadExpenses.push({
          id: responseData[key].id,
          title: responseData[key].title,
          amount: responseData[key].amount,
          date: new Date(responseData[key].date)
        })
      }
      setExpenses(loadExpenses)
    })
  },[])
  
  const addExpenseHandler=(data)=>{
    axios.post('https://expense-tracker-cda0f-default-rtdb.firebaseio.com/expenses.json',JSON.stringify(data))
    .then(()=>{
      setExpenses(prevExpenses=>{
        return [data, ...prevExpenses]
      })
    })
    .catch(err=>console.log(err))
  
  }

  return (
    <div className='expense-item-wrapper'>

      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
