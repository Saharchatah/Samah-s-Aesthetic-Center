import React, { useEffect, useState } from "react";

import axios from "axios";
import ExpenseItem from "./ExpenseItem";
import API from "../../api";
import SideNav from '../../components/SideNav/SideNav'


function ExpenseList() {

  const [expensesData, setExpensesData] = useState([]);
  const [editexpenseData, setEditexpenseData] = useState([]);
  const [edit_id, setEdit_id] = useState("");
  const [addexpenseData, setAddexpenseData] = useState([]);

   const handleSaveClick = async (_id, description) => {
    console.log("hi", _id);
    setEdit_id(_id);
    setEditexpenseData({ ...editexpenseData, _id: _id });
    console.log("hi2", edit_id);
    setEditexpenseData({ ...editexpenseData, description: description });
    
    let reqBody = { description, _id };

    console.log("reqBody to updt", reqBody);
    await API.put(`expenses/${_id}`, reqBody);

    await request();
  };


  const request = async () => {
    await axios.get("http://localhost:5000/expenses").then((response) => {
      setExpensesData(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    request();
  }, [expensesData]);

  const deleteExpense =  async (_id) => {
    const id = _id;
    console.log("id:", id);

    axios
      .delete(`http://localhost:5000/expenses/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    alert("Expense has been deleted");
    await request();
  };


  const allExpenses = expensesData.map((expense) => (
    <ExpenseItem
      key={expense._id}
      description={expense.description}
      id={expense._id}
      handleSaveClick={handleSaveClick}
      deleteExpense={deleteExpense}
      
    />
  ));


  const addExpense = async (e) => {
    e.preventDefault();
    let reqBody = addexpenseData;
    // const id = editexpenseData._id;
    await API.post(`expenses`, reqBody);

    await request();
    document.getElementById("inputadesc").value = "";
  };

 
  return (
    <>
        <SideNav/>

      <h3 className="text-muted mb-1">Expenses </h3>
   
      <form id="formAdd" onSubmit={addExpense} >
        <div className="container  mt-5 pt-3 pb-2 text-dark shadow  col-10">
          <div className="row mb-3 ">
            <label for="inputadesc" className="col-sm-3 col-form-label mt-3">
              description
            </label>
            <div className="col-sm-5 mt-3">
              <input
                className="form-control "
                id="inputadesc"
                name="description"
                onChange={(e) => {
                  setAddexpenseData({
                    ...addexpenseData,
                    description: e.target.value,
                  });
                  console.log("desc", addexpenseData.description);
                }}
                type="text"
              />
            </div>
            <div className="col-sm-4">
              <button
                className="pbtn  btn btn-outline-primary mt-3 rounded shadow border "
                type="submit"
              >
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </form>

     

      <div className="row ">
        <div className="container  mt-4 pt-3 text-dark shadow col-8 ">
          <ul>{allExpenses}</ul>
        </div>
      </div>
    </>
  );
}

export default ExpenseList;
