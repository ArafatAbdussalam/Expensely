import React from "react"

import ExpenseDate from "./ExpenseDate"
import Card from "./Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

    return (
        <Card>
            <ExpenseDate date = {props.date} />
            <div>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;