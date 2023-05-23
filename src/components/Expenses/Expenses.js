import { ExpenseItem } from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import { useState } from "react";

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 ? (<p className="expenses-list__fallback">No expenses found!</p>) : (
          filteredExpenses.map(expense=>(
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) }

        
        
    </div>
  )
}
