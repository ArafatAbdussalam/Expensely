import React, { useState } from 'react';

import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    const [userTitle, setUserTitle] = useState("")
    const [userAmount, setUserAmount] = useState("")
    const [userDate, setUserDate] = useState("")

    const titleChangeHandler = (event) => {
        setUserTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setUserAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setUserDate(event.target.value)
    };
    

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userTitle,
            amount: userAmount,
            date: new Date(userDate)
        }

        props.onSaveExpenseData(expenseData);
        setUserTitle("")
        setUserAmount("")
        setUserDate("")
    }

    return (

        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" 
                    value={userTitle} 
                    onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" min="0.01" step="0.01" value={userAmount} onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input 
                    type = "date" 
                    min="2019-01-01" 
                    max="2030-01-01" 
                    value={userDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick = {props.onCancel}>Cancel</button>
                <button type="submit">Add Expenses</button>
            </div>
             
        </form>
    )
}

export default ExpenseForm;
