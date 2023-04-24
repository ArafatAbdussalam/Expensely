import React, { useState } from "react"

import ExpenseDate from "./ExpenseDate"
import Card from "./Card"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle("Updated!")
    }

    return (
        <Card>
            <ExpenseDate date = {props.date} />
            <div>
                <h2>{title}</h2>
                <div>${props.amount}</div>
            </div>
            <button onClick = {clickHandler} >Change Title</button>
        </Card>
    )
}

export default ExpenseItem;