import './NewExpense.css'
import { ExpenseForm } from './ExpenseForm'
import { useState } from 'react';

export const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseHandler=(data)=>{
    const expenseData={
      ...data,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  )
}

