import React, { useState } from "react";
import axios from "axios";
import { Redirect, useHistory } from "react-router-dom";
import YearCombo from "../../components/YearCombo/YearCombo";
import SideNav from '../../components/SideNav/SideNav'

function AddClient() {
  let history = useHistory();
  const [redirectadd, setRedirectadd] = useState(false);
  // const [redirectupdate, setRedirectupdate] = useState(false);
  const [client, setClient] = useState({});
  let idClient = "";
  let redirectupdate = false;

  const addClient = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/clients", client);
    setRedirectadd(true);
  };

  const addUpdateClient = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/clients", client).then((response) => {
      redirectupdate = true;
      console.log("redirectupdate", redirectupdate);
      idClient = response.data._id;
      console.log("res j2", idClient);
      history.push(`/UpdateClient/${idClient}`);
    });
    
  };
  if (redirectadd) {
    return <Redirect to="/Client" />;
  }

  ////year
  const onYearChange = (e) => {
    console.log("selected value:", e.target.value);
    // birthyear=e.target.value;
    setClient({ ...client, birthyear: e.target.value });
    console.log("birthyear value:", client.birthyear);
  };
  const getYearDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(60), (v, i) => (
      <option key={i} value={year - i}>
        {year - i} - age : {i}
      </option>
    ));
  };

  return (
    <>
    <SideNav/>
      <h3 className="text-muted mb-2">Add Client</h3>
      <div className="container  mt-5  text-dark shadow">
        <form onSubmit={addClient}>
          <div className="row mb-3 ">
            <label for="inputfName" className="col-sm-2 col-form-label mt-3">
              First Name
            </label>
            <div className="col-sm-9 mt-3">
              <input
                className="form-control "
                id="inputfName"
                name="firstname"
                onChange={(e) => {
                  setClient({ ...client, firstname: e.target.value });
                  console.log("fname", client.firstname);
                }}
                type="text"
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputlastName" className="col-sm-2 col-form-label">
              Last Name
            </label>
            <div className="col-sm-9">
              <input
                className="form-control "
                id="inputlastName"
                type="text"
                name="lastname"
                onChange={(e) => {
                  setClient({ ...client, lastname: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputPhone" className="col-sm-2 col-form-label">
              Phone Number
            </label>
            <div className="col-sm-9">
              <input
                className="form-control "
                id="inputPhone"
                type="number"
                name="phonenumber"
                onChange={(e) => {
                  setClient({ ...client, phonenumber: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label for="inputaddress" className="col-sm-2 col-form-label">
              Address
            </label>
            <div className="col-sm-9">
              <input
                className="form-control "
                id="inputaddress"
                type="text"
                name="address"
                onChange={(e) => {
                  setClient({ ...client, address: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="row  ">
            <label for="inputyear" className="col-sm-2 col-form-label mb-4">
              Age
            </label>
            <div className="col-sm-9 mb-4">
              <select className="form-control" onChange={onYearChange}>
                {getYearDropList()}
              </select>
            </div>
          </div>

          <div className="row mb-3 mt-3">
            <label className="col-sm-3  col-form-label"></label>
            <div className="col-sm-4">
              <button
                className="pbtn  btn btn-outline-primary mx-5 mb-3  rounded shadow border px-5 py-2"
                onClick={() => addClient}
              >
                SAVE
              </button>
            </div>
            <div className="col-sm-4 ">
              <button
                className="pbtn  btn btn-outline-primary mx-5 mb-3  rounded shadow border px-5 py-2"
                onClick={addUpdateClient}
              >
                More Info
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddClient;
