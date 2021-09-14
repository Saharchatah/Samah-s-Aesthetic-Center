
import './App.css';
import React, { useState, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './pages/Home/Home';
import Appointment from './pages/Appointments/Appointment';

import Client from './pages/Clients/Client';
import AddClient from './pages/Clients/AddClient';
import UpdateClient from './pages/Clients/UpdateClient';

import ExpensePaymentAdd from './pages/Expenses/ExpensePaymentAdd';
import ExpenseList from './pages/Expenses/ExpenseList';
import ExpensePaymentList from './pages/Expenses/ExpensePaymentList';
import ExpensePaymentUpdate from './pages/Expenses/ExpensePaymentUpdate';

import Payment from './pages/Payments/Payment';
import Service from './pages/Services/Service';
import AddApp from './components/AddApp/AddApp'
import AddService from './components/AddService/AddService'
import AddGategory from './components/AddGategory/AddGategory'
import { ToastContainer } from 'react-toastify'
import UpdateServiceCategory from './components/UpdateServiceCategory/UpdateServiceCategory.jsx';
// import SideNav from './components/SideNav/SideNav.jsx';
import Category from './pages/Category/Category.jsx'
import UpdateCategory from './components/UpdateCategory/UpdateCategory.jsx'
import Login from './pages/Login/Login'


function App() {

 
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        {/* <SideNav /> */}

        <Switch>
        <Route exact path="/" component={Login} />

          <Route path="/home" component={Home} />
          <Route path='/Appointment' component={Appointment} />
          <Route path='/Client' component={Client} />
          <Route path='/AddClient' component={AddClient} />
          <Route path='/UpdateClient/:id' component={UpdateClient} />
          <Route path='/ExpensePaymentAdd' component={ExpensePaymentAdd} />
          <Route path='/ExpenseList' component={ExpenseList} />
          <Route path='/ExpensePaymentList' component={ExpensePaymentList} />
          <Route path='/ExpensePaymentUpdate/:id' component={ExpensePaymentUpdate} />
          <Route path='/Payment' component={Payment} />
          <Route path='/Service' component={Service} />
          <Route path='/AddApp' component={AddApp} />
          <Route path='/AddService' component={AddService} />
          <Route path='/AddGategory' component={AddGategory} />
          <Route path='/UpdateServiceCategory/:id' component={UpdateServiceCategory} />

          <Route path='/Category' component={Category} />
          <Route path='/UpdateCategory/:id' component={UpdateCategory} />

        </Switch>

      </BrowserRouter>




    </div>
  );
}

export default App;
