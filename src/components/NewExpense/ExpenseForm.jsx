import { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [date,setDate]=useState('')

    const titleChange=(event)=>{
        setTitle(event.target.value)
    }
    const amountChange=(event)=>{
        setAmount(event.target.value)
    }
    const dateChange=(event)=>{
        setDate(event.target.value)
    }

    const expenseSubmit=(event)=>{
        event.preventDefault()
        const expenseData={
            title: title,
            amount:amount,
            date: new Date(date)
        }
        props.onSaveExpense(expenseData)

        setTitle('')
        setAmount('')
        setDate('')
    
    }

  return (
    <form onSubmit={expenseSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={titleChange} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} onChange={amountChange} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={date} onChange={dateChange} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}
