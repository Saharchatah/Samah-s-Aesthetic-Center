import React from "react";
import axios from "axios";
import { useState } from "react";
import './ExpenseItem.css';
function ExpenseItem(props) {

  const [descriptionState, setDescriptionState] = useState(props.description);

  const handleChange = (e) => {
    setDescriptionState(e.target.value);
  };



  return (
    <>
      <li>
        <div
          className="mb-2"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <input
            type="text"
            className="text-dark w-50 rounded shadow border "
            value={descriptionState}
            onChange={handleChange}
          />
          <button
            className="shadow  btn btn-outline-primary expItem_btn_btn"
            onClick={() => props.handleSaveClick(props.id, descriptionState)}
            id={props.id}
            data-toggle="tooltip" data-placement="right" title="Save"
          >
            <i class="bi bi-save" ></i>
            <span className="expItem_btn_span ml-2">Save</span>
          </button>
          <button 
            className="shadow  btn btn-outline-danger expItem_btn_btn"
            // onClick={() => { remove(props.id); }}deleteExpense
            onClick={() => props.deleteExpense(props.id)}
            id={props.id}
            data-toggle="tooltip" data-placement="right" title="Delete"
          >
            <i class="bi bi-trash" ></i>
            <span className="expItem_btn_span ml-2">Delete</span>
          </button>
        </div>
      </li>
    </>
  );
}

export default ExpenseItem;
