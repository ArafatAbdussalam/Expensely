import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState({
        inputTitle: "",
        inputAmount: "",
        inputDate: ""
    })

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, 
                inputTitle: event.target.value}
        })
    };

    const amountChangeHandler = () => {
        setUserInput(() => {})
    };

    const dateChangeHandler = () => {
        setUserInput(() => {})
    };

    return (

        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = "text" onChange={titleChangeHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = "number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = "date" min="2019-01-01" max="2030-01-01" onChange={dateChangeHandler} />
                </div>
            </div>

            <button>Add Expense</button>
        </form>
    )
}

export default ExpenseForm;
