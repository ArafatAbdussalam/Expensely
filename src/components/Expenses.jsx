import React, {useState} from "react"

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "./Card";
import "./Expenses.css";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState("2023")

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(
        (expense) => {
            return expense.date.getFullYear().toString() === filteredYear
        }
    )

    

    return (
        <div>

        <Card>  

            <ExpenseFilter 
            selected = {filteredYear} 
            onChangeFilter = {filterChangeHandler} 
            />

            <ExpensesList />

        </Card>
    </div>
    )
}

export default Expenses;