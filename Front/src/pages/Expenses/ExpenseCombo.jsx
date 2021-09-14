import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ExpenseCombo(props) {

    const [expense, setExpense] = useState([]);

    useEffect(() => {

        async function getExpense() {
            let response = await axios.get("http://localhost:5000/expenses")
            let result = response.data;
            setExpense(result);
           
        }

        getExpense()
    }, [props.id_expense])

    return (
        <div>

            <select className="form-control"
                name={props.description}
                onChange={props.onChange}
            >
                <option
                    value=""
                    selected={props.id_expense === ""}
                >
                    Choose an Expense
                </option>


                {expense.map(expense => (
                    <option
                        key={expense._id}
                        value={expense._id}
                        selected={props.id_expense === expense._id}
                    >
                        {expense.description}
                    </option>
                ))}

            </select>

        </div>
    )
}