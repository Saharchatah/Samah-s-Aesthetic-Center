import React,{useState} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import ExpenseCombo from './ExpenseCombo'
import SideNav from '../../components/SideNav/SideNav'


function ExpensePaymentAdd() {
 
  const [redirectadd, setRedirectadd] = useState(false);  
    
  const [epayment,setEpayment]= useState({});
   
   
    const addEpayment = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/expensepayments", epayment)       
           setRedirectadd(true);
                      
          };
          

               
      if (redirectadd){ return <Redirect to ="/ExpensePaymentList" />;}
    
    
    
    return (
        <>
        <SideNav/>

        <h3 className="text-muted mb-2">Add Expense Payment</h3>
          <div className='container  mt-5  text-dark shadow'>
          
           <form   onSubmit={addEpayment}>
                      
                        <div className="row  ">
                            <label  className="col-sm-2 col-form-label mb-4">Expense</label>
                            <div className="col-sm-9 mb-4">
                            
                              <ExpenseCombo  onChange={(e) => setEpayment({...epayment,id_expense :e.target.value})} />
                            </div>
                        </div>
                      
                       <div className="row mb-3 ">
                            <label for="inputPrice" className="col-sm-2 col-form-label mt-3">Price</label>
                            <div className="col-sm-9 mt-3">
                                <input  className="form-control " id="inputPrice"  name="price" onChange={(e) => {
                                      setEpayment({...epayment,price :e.target.value});
                                      console.log("price",epayment.price);
                                      }
                                      }
                                  type="number" step="0.01"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputcurrency" className="col-sm-2 col-form-label">currency</label>
                            <div className="col-sm-9">
                               
                                    <select className="form-control" onChange={(e) => setEpayment({...epayment,currency :e.target.value})}>
                                     
                                      <option value="LB" selected>LB</option>
                                      <option value="$">$</option>
                                  </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputdate" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-9">
                                <input  className="form-control " id="inputdate"  type="date" defaultvalue={Date.now()}
                                  name="paymentdate"
                                  onChange={(e) => {
                                    setEpayment({...epayment,paymentdate :e.target.value})}}/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputdescription" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-9">
                                <input  className="form-control " id="inputdescription"  type="text"       
                                name="description"
                                onChange={(e) => {
                                  setEpayment({...epayment,description :e.target.value})}}/>
                            </div>
                        </div>
                        
        
            
                        <div className="row mb-3 mt-3">
              <label className="col-sm-3  col-form-label"></label>
              <div className="col-sm-4">
                <button className="pbtn  btn btn-outline-primary mx-5 mb-3  rounded shadow border px-5 py-2" onClick={() => addEpayment}>
                     SAVE   
                </button>
              </div>
             
            </div>
            
            
          </form> 

          
          </div>
         
            

        </>
    )
}




export default ExpensePaymentAdd
