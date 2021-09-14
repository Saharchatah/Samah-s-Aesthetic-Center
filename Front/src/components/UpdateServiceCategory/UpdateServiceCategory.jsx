import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryList from '../CategoryList';
import { useHistory } from "react-router"
import SideNav from '../SideNav/SideNav';
import AddService from '../AddService/AddService'

export default function UpdateServiceCategory(props) {
    let history = useHistory();
    const id = props.match.params.id;



    const [category, setca] = useState("");
    const [service, setse] = useState("");
    const [time, settime] = useState("");
    const [price, setprice] = useState("");
    const [currency, setcurrency] = useState("");



    async function getser() {

        let r = await axios.get(`http://localhost:5000/service`)

            .then(res => {
                let result = res.data.services;
                let isfind = result.find(f => f._id == id)

                setca(isfind.category._id)
                setse(isfind.description)
                settime(isfind.time)
                setprice(isfind.price)
                setcurrency(isfind.currency)

            })
    }


    console.log(category)
    console.log(service)
    console.log(time)
    console.log(price)
    console.log(currency)


    async function updateservice(e) {

        e.preventDefault();

        let reqbody = {

            id_category: category,
            description: service,
            price: price,
            currency: currency,
            time: time

        }

        let u = await axios.put(`http://localhost:5000/service/${id}`, reqbody)
        console.log(reqbody)

        console.log("the update", u)
        history.push('/Service')
    }


    useEffect(() => {
        getser()
    }, [])


    return (
        <div>
            <SideNav/>
            <form onSubmit={updateservice}>
                <CategoryList
                    id={category}
                    onChange={e => { setca(e.target.value) }} />
<div style={{display:'flex', flexDirection:'row'}}>
<h5 className="text-muted mb-2">service:</h5>
                 <input className=' text-dark w-25 rounded shadow border ' value={service} onChange={(e) => setse(e.target.value)} />
                 </div>
                 <div style={{display:'flex', flexDirection:'row'}}>

                 <h5 className="text-muted mb-2">time:</h5>
                 <input  className=' text-dark w-25 rounded shadow border ' value={time} onChange={(e) => settime(e.target.value)} />
</div>
<div style={{display:'flex', flexDirection:'row'}}>

                 <h5 className="text-muted mb-2">price</h5>
                <input  className=' text-dark w-25 rounded shadow border ' value={price} onChange={(e) => setprice(e.target.value)} />
</div>
<div style={{display:'flex', flexDirection:'row'}}>

                <h5 className="text-muted mb-2">currency</h5>
  <input  className=' text-dark w-25 rounded shadow border ' value={currency} onChange={(e) => setcurrency(e.target.value)} />
</div>
                <input style={{marginTop:'2rem'}} className=' kk shadow  btn btn-outline-danger' type="submit" value="Save" />
            </form>
        </div>
    )
}
