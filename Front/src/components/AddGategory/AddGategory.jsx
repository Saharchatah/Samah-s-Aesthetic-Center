import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import {useHistory} from "react-router"
import SideNav from '../SideNav/SideNav';

function AddGategory() {


    const [category, setcategory] = useState("");

    const[error, seterror] = useState("");

    let history = useHistory();

    async function addcategory(e) {

        e.preventDefault();

        let reqbody = {
            description: category
        }


     let d = await axios.get(`http://localhost:5000/category`)

        const data = d.data;
        const exist = data.find(d => d.description === category);
     
        if (exist) {
            console.log("category alredy exist")
            seterror("category alredy exist");
        }
        else {

 let s =await axios.post(`http://localhost:5000/category`, reqbody)

 let result=s.data;
 console.log(result)

 if(result){
     toast.success("added new category")
    //  toast.warning("added")
    //  toast.error("added")
 }

  history.push("/service")

       }}
     

return (

    <div>
        <SideNav/>
        <form onSubmit={addcategory}>

        <h5 className="text-muted mb-2">Add Gategory</h5>
            <input  className=' text-dark w-25 rounded shadow border ' type="text" placeholder="add category" value={category} onChange={(e) => setcategory(e.target.value)} />
<br/>
            <input style={{marginTop:'1.5em'}} className=' shadow  btn btn-outline-danger' type="submit" value="save" />

          {error}

        </form>

        <div style={{ marginTop: '13rem' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ee7752" fill-opacity="0.6" d="M0,320L34.3,304C68.6,288,137,256,206,245.3C274.3,235,343,245,411,234.7C480,224,549,192,617,197.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,160C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>

    </div>
)
}

export default AddGategory
