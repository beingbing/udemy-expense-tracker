import React from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
        console.log('expense data in new expense component: ', expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
};

export default NewExpense;