import React, { useState } from "react"

import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"


const sampleExpenses = [
    {   id: 1,
        title: "Tolet Paper",
        amount: 92.34,
        date: new Date(),
    },
    {   id: 1,
        title: "Groceries",
        amount: 4,
        date: new Date(),
    },
    {   id: 1,
        title: "Insurance",
        amount: 4,
        date: new Date(),
    },
    {   id: 1,
        title: "Tax",
        amount: 4,
        date: new Date(),
    },
    {   id: 1,
        title: "Food",
        amount: 4,
        date: new Date(),
    },
]

const App = () => {

    const [expenses, setExpenses] = useState(sampleExpenses)

    const addExpenseHandler = (expense) => {
        setExpenses( (prevExpenses) => {
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items = {sampleExpenses} />
        </div>
    )
}

export default App;