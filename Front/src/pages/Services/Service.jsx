import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"

import ServicesCat_List from '../../components/Oneservice'
import SideNav from '../../components/SideNav/SideNav'

import './Service.css'


function Service() {


  const [cats, setcat] = useState([])



  async function deleteservice(id) {

    let s = await axios.delete(`http://localhost:5000/service/${id}`)
console.log("my delete",s)
    if (s) {
      let state = [...cats].filter(c => c._id != id);
      setcat(state)
    }


  }


  async function getser() {

    let res = await axios.get(`http://localhost:5000/service`)


    let result = res.data.services;
    setcat(result)
  }

  console.log("my all service:",cats)


  useEffect(() => {
    getser();
    // deleteservice()
  }, [])

  return (
    <div>

<SideNav/>
<div style={{display:"flex", flexDirection:"row"}}>







</div>
    

      <table className=' text-dark w-25 rounded shadow border '>

        <tr  className=' text-dark w-25 rounded shadow border '>
          <td className="ttable">category</td>
          <td className="ttable">service</td>
          <td className="ttable">Time</td>
          <td className="ttable">price</td>
          <td className="ttable">Currency</td>
          <td className="ttable">Actions</td>
        </tr>
        {cats.map(cat =>

          <tr key={cat._id}>

            <td className="ttable">{cat.category.description}</td>
            <td className="ttable">{cat.description}</td>
            <td className="ttable">{cat.time}</td>
            <td className="ttable">{cat.price}</td>
            <td className="ttable">{cat.currency}</td>


            <td className="ttable">  <Link to={`UpdateServiceCategory/${cat._id}`} ><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>

              <Link to="#" onClick={() => deleteservice(cat._id)} ><i class="material-icons" data-toggle="tooltip" title="Delete">  &#xE872;</i></Link></td>

          </tr>


        )}

      </table>
    

      <button style={{float:'left' ,marginTop:'2rem'}}> <a href="/addservice"  >Add Service</a> </button>
       <div style={{ marginTop: '1.3rem' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ee7752" fill-opacity="0.6" d="M0,320L34.3,304C68.6,288,137,256,206,245.3C274.3,235,343,245,411,234.7C480,224,549,192,617,197.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,160C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>

    </div>
  )
}

export default Service
