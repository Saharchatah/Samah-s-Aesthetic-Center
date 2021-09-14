import React, { useEffect, useState } from 'react'
import  './Login.css'
import {Helmet} from 'react-helmet';

export default function Login() {

 
    const [user, setuser] = useState("")
    const [pass, setpass] = useState("")
    const [ee, sete] = useState("")

    function login() {

        if (user == 'samah' && pass == '123') {
            window.location.href = '/Home'
        } else {
            sete("wrong username or  password try  again");
        }
    }
    return (
        <div className="lbody"  > 
                 
             <div class="d-flex flex-column justify-content-center w-100 h-100">

        <div class="d-flex flex-column justify-content-center align-items-center">
            <h1 class="fw-light text-white m-0">Samah Clinic</h1>
            <div style={{display:'flex' , flexDirection:'column'}}  class= "design btn-group my-5">
                
           <input style={{marginTop:'2em'}} className="shape" type='text' placeholder='username' onChange={(e) => setuser(e.target.value)} />
            <br />
            <input className="shape" type='password' placeholder='password' onChange={(e) => setpass(e.target.value)} />

            <br />
            <button id="f" className="shape" onClick={() => login()}>login</button>

            <br />
            {ee}
            </div>
            
        
        </div>
    </div></div>
      
  
   

    )
}
