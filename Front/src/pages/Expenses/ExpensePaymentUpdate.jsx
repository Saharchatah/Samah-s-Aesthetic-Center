import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'
// import ExpenseList from './ExpenseList'
import moment from 'moment'
import SideNav from '../../components/SideNav/SideNav'


function ExpensePaymentUpdate({match}) {
 
  const [redirect, setRedirect] = useState(false);  
  const [expense, setExpense] = useState([]);  


  const [state, updateState] = useState({
    _id: match.params.id,
    description: "",
    paymentdate: "",//match.params.paymentdate,
    currency: "",
    id_expense: "",
    price:0,
    
  });

  let {
    _id,
    description,
    paymentdate,
    currency,
    id_expense,
    price
    
  } = state;
   
  const setState = (newValue) => {
    updateState((prevState) => ({
      ...prevState,
      ...newValue,
      

    }));
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ [name]: value });
  };
 
  useEffect(() => {

    async function getExpense() {
        let response = await axios.get("http://localhost:5000/expenses")
        let result = response.data;
        setExpense(result);
        console.log("exp up",result);
      
    }

    getExpense()
}, [id_expense])
        

               
  const request = async () => {
    await axios
      .get(`http://localhost:5000/expensepayments/${_id}`)
      .then((response) => {
        setState(response.data);
        console.log("response.data",response.data);
       
    });
  };
useEffect(() => {
  request();
  
  
}, []);

const updatePaymentdata = async(e) => {
    e.preventDefault()
   
    console.log("state ",state);
    axios.put(`http://localhost:5000/expensepayments/${_id}`, state)

   setRedirect(true);
}
if (redirect){     return <Redirect to ="/ExpensePaymentList" />;};
  



    
    
    return (
        <>
        <SideNav/>
        <h3 className="text-muted mb-2">Update Expense Payment</h3>
          <div className='container  mt-5  text-dark shadow'>
          
           <form   form noValidate autoComplete="off" onSubmit={updatePaymentdata}>
                      
                        <div className="row  ">
                            <label  className="col-sm-2 col-form-label mb-4">Expense</label>
                            <div className="col-sm-9 mb-4">
                            
                              {/* <ExpenseList  value={id_expense} name="id_expense"  onChange={handleChange} /> */}
                              <select className="form-control" value={id_expense} name="id_expense"  onChange={handleChange}> {expense.map(expense => (
                    <option
                        key={expense._id}
                        value={expense._id}
                        selected={id_expense === expense._id}
                    >
                        {expense.description}
                    </option>
                ))}

            </select>
                            </div>
                        </div>
                      
                       <div className="row mb-3 ">
                            <label for="inputPrice" className="col-sm-2 col-form-label mt-3">Price</label>
                            <div className="col-sm-9 mt-3">
                                <input  className="form-control " id="inputPrice"  name="price"  value={price} onChange={handleChange}
                                      
                                  type="number" step="0.01"/>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputcurrency" className="col-sm-2 col-form-label">currency</label>
                            <div className="col-sm-9">
                               
                                    <select className="form-control" name="currency"  value={currency} onChange={handleChange}>
                                     
                                      <option value="LB" selected>LB</option>
                                      <option value="$">$</option>
                                  </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label for="inputdate" className="col-sm-2 col-form-label">Date</label>
                            <div className="col-sm-9">
                                <input  className="form-control " id="inputdate"  type="date" 
                                  name="paymentdate"
                                  onChange={handleChange}  value={moment(paymentdate).format('YYYY-MM-DD')}/>
                            </div>
                           
                        </div>

                        <div className="row mb-3">
                            <label for="inputdescription" className="col-sm-2 col-form-label">Description</label>
                            <div className="col-sm-9">
                                <input  className="form-control " id="inputdescription"  type="text"       
                                name="description"
                                value={description}
                                onChange={handleChange}/>
                            </div>
                        </div>
                        
        
            
                        <div className="row mb-3 mt-3">
              <label className="col-sm-3  col-form-label"></label>
              <div className="col-sm-4">
                <button className="pbtn  btn btn-outline-primary mx-5 mb-3  rounded shadow border px-5 py-2" onClick={() => updatePaymentdata}>
                     SAVE   
                </button>
              </div>
             
            </div>
            
            
          </form> 

          
          </div>
         
            

        </>
    )
}




export default ExpensePaymentUpdate
