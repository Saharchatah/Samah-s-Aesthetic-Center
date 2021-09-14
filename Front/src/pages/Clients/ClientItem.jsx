import React from 'react'
import axios from 'axios'
import { useState  } from 'react'
import {Link,Redirect,useHistory} from 'react-router-dom'


function ClientItem(props) {
   
  let history = useHistory();

    const updateClick = (e) => {
        history.push(`/UpdateClient/${props.id}`);
      
        e.preventDefault();
        props.afterUpdate();
    }
  
  
  const [redirect, setRedirect] = useState(false);
  
  const remove = async (e) =>{
    e.preventDefault();
    const id = props.id;//e.target.id;
    console.log("id:",id);
    console.log("firstname:",e.target.firstname);
   await  axios
    .delete(`http://localhost:5000/clients/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    setRedirect(true);
    alert('client has been deleted');  
// axios.delete(`http://localhost:5000/deleteclient/${id}`).then((res) => {window.location.reload(false);})
}
if (redirect){     return <Redirect to ="/client" />;}
    
    return (
        <>
      <li >
        <div className='mb-2' style={{ display: 'flex', justifyContent: 'space-between' }}>
        
          <input type='text' className='text-dark w-25 rounded shadow border ' value={props.firstname} disabled />
          <input type='text' className='text-dark w-25 rounded shadow border ' value={props.lastname} disabled />
          <input type='text' className='text-dark w-25 rounded shadow border ' value={props.phonenumber} disabled />
         
          {/* <Link to={`/UpdateClient/${props.id}`} className=' shadow pbtn  btn btn-outline-primary'>  <i class="bi bi-pencil"></i></Link> */}
          <button className=' shadow  btn btn-outline-primary' onClick={(e)=>{e.preventDefault();updateClick(e)}} id={props.id}><i class="bi bi-pencil"></i></button>
          <button className=' shadow  btn btn-outline-danger' onClick={remove} id={props.id}><i class="bi bi-trash"></i></button>
        </div>
        {/* <hr /> */}
      </li>
    </>
    )
}

export default ClientItem
