import React from 'react'
import axios from 'axios'
import { useState  } from 'react'
import {Link,Redirect} from 'react-router-dom'
import moment from 'moment'

function ExpensePaymentItem(props) {
   

    const [redirect, setRedirect] = useState(false);
  
  const remove = (e) =>{
    
    const id = props.id;//e.target.id;
    console.log("id:",id);
    
    axios
    .delete(`http://localhost:5000/expensepayments/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    setRedirect(true);
    alert('payment has been deleted');  
// axios.delete(`http://localhost:5000/deleteclient/${id}`).then((res) => {window.location.reload(false);})
}
if (redirect){     return <Redirect to ="/ExpensePaymentList" />;}
    
    return (
        <>
      <li >
        <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
        
        <input type='text' className='text-dark w-25 rounded  border ' value={props.expense} disabled />
          
          <input type='text' className='text-dark w-25 rounded  border ' value={props.price} disabled />
          <input type='text' className='text-dark w-25 rounded  border ' value={props.currency} disabled />
          <input type='text' className='text-dark w-20 rounded  border ' value={moment(props.paymentdate).format('DD-MM-YYYY')} disabled />
          <Link to={`/ExpensePaymentUpdate/${props.id}`} className='  pbtn  btn btn-outline-primary'>  <i class="bi bi-pencil"></i></Link>
          
          <button className='   btn btn-outline-danger' onClick={remove} id={props.id}><i class="bi bi-trash"></i></button>
        </div>
        {/* <hr /> */}
      </li>
    </>
    )
}




export default ExpensePaymentItem
