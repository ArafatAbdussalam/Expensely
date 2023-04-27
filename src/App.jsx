import React, { useState } from "react"

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"


const sampleExpenses = [
    {   id: "e1",
        title: "Toilet Paper",
        amount: 92,
        date: new Date(2022, 10, 21)
    },
    {   id: "e2",
        title: "Groceries",
        amount: 4,
        date: new Date(2022, 3, 15)
    },
    {   id: "e3",
        title: "Insurance",
        amount: 4,
        date: new Date(2020, 1, 7)
    },
    {   id: "e4",
        title: "Tax",
        amount: 4,
        date: new Date(2019, 1, 19)
    },
    {   id: "e5",
        title: "Food",
        amount: 4,
        date: new Date(2023, 12, 25)
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
            <Expenses items = {expenses} />
        </div>
    )
}

export default App;