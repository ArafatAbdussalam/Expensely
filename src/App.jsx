import Expenses from "./components/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const App = () => {

    const expenses = [
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

    return (
        <div>
            <NewExpense />
            <Expenses items = {expenses}/>
        </div>
    )
}

export default App;