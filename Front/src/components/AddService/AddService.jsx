import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { useHistory } from "react-router"
import { toast } from "react-toastify"

import CategoryList from "../CategoryList.jsx"

import SideNav from '../SideNav/SideNav.jsx'

import './AddService.css'


function Service() {

    const [cat, setcat] = useState("");
    const [des, setdes] = useState("");
    const [price, setprice] = useState("");
    const [currency, setcurrency] = useState("");
    const [time, settime] = useState("");

    let history = useHistory();

    async function addservise(e) {
        e.preventDefault();

        let reqbody = {

            description: des,
            id_category: cat,
            price: price,
            currency: currency,
            time: time,
        }


        try {
            let s = await axios.post(`http://localhost:5000/service`, reqbody);


            if (s.data) {
                toast.success("added new service")

            }
            console.log(s)
            history.push("/service")

        } catch (error) {
            console.log("BIG Error : ", error);
        }
    }


    return (
        <div>
            <SideNav />
            <form onSubmit={addservise}>
                <div className="allinput">
                    <CategoryList onChange={(e) => setcat(e.target.value)} />
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem', marginTop:'1.5em' }}>
                        <h5 className="text-muted mb-2">decription:</h5>
                        <input className='DPT text-dark w-25 rounded shadow border ' type="text" placeholder="description" value={des} onChange={(e) => setdes(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>
                        <h5 className="text-muted mb-2">price:</h5>
                        <input className='DPT text-dark w-25 rounded shadow border ' type="number" placeholder="price" value={price} onChange={(e) => setprice(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>
<h5 className="text-muted mb-2">Time:</h5>

<input className='DPT text-dark w-25 rounded shadow border ' type="String" placeholder="number" value={time} onChange={(e) => settime(e.target.value)} />
</div>
                    
                    <select className="form-control kk" onChange={(e) => setcurrency(e.target.value)}>
                        <option value={null}>Currency</option>
                        <option value="LB">LB</option>
                        <option value="$">$</option>
                    </select>

                    {/* <br /> */}
                    <input style={{marginTop:'1em'}} className='kk shadow  btn btn-outline-danger' type="submit" value="save" />

                </div>
            </form>
            <div style={{ marginTop: '15.3rem' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ee7752" fill-opacity="0.6" d="M0,320L34.3,304C68.6,288,137,256,206,245.3C274.3,235,343,245,411,234.7C480,224,549,192,617,197.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,160C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Service
