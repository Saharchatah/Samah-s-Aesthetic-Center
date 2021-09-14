
import React, { useEffect,useState } from 'react'
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import ExpensePaymentItem from './ExpensePaymentItem';
import SideNav from '../../components/SideNav/SideNav'


function ExpensePaymentList() {
    
    let history = useHistory();
   
    const addPaymnetClick = () => {
        history.push("/ExpensePaymentAdd");
    }
    const addExpenseClick = () => {
      history.push("/ExpenseList");
  }
    
    const [exPaymentlist, setexPaymentlist] = useState([]);
        
    

    const request = async (s) => {
        if (s === 0){
            await axios
            .get("http://localhost:5000/expensepayments")
            .then((response) => {
              setexPaymentlist(response.data);
              console.log(response.data);
          });
        }
        else {
        
        
      };
    }
    useEffect(() => {
      request(0);
    }, []);


    const allExpPayments = exPaymentlist.map((epayment) => (
        <ExpensePaymentItem
          key={epayment._id}
          description={epayment.description}
         id_expense={epayment.id_expense}
         expense={epayment.expense.description}
         price={epayment.price}
         currency={epayment.currency}
         paymentdate={epayment.paymentdate}
        
          id={epayment._id}
        />
      ));


    return (
        <div>
        <SideNav/>
          
            <h3 className="text-muted mb-2">Expenses Payments</h3>
            <div className="input-group mb-4 container ">
            
                 
                  <button className='pbtn  btn btn-outline-primary mx-5 rounded shadow border '  onClick={addPaymnetClick}>Add Payment</button>
            </div>
            
            <div className='container  mt-5 text-dark shadow '>
                <ul style={{listStyleType:'none'}}>
                <li >
        <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <input type='text' className='text-dark w-25   border-0 ' value="expense" disabled />
          
          <input type='text' className='text-dark w-25 border-0 ' value="price" disabled />
          <input type='text' className='text-dark w-25 border-0 ' value="currency" disabled />
          <input type='text' className='text-dark w-20 border-0 ' value="Date" disabled />
         
        </div>
        <hr  style={{ border:'none',borderTop: '2px dotted'}} />
      </li>
                    
                    {allExpPayments}
                   

                </ul>
            </div>
        </div>
    )
}


export default ExpensePaymentList
