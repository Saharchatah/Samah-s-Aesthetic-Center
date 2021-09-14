import axios from 'axios'
import react, { useEffect, useState } from 'react'

import { Link } from "react-router-dom"
import '../Services/Service.css'
import SideNav from '../../components/SideNav/SideNav'

import Home from '../Home/Home.css'


export default function Category() {

    const [cats, setcat] = useState([])

    async function getcategory() {

        let r = await axios.get(`http://localhost:5000/category`)
            .then(res => {
                let re = res.data;
                setcat(re)
            })
    }

    async function deleteca(id) {

        let s = await axios.delete(`http://localhost:5000/category/${id}`)
        if (s) {

            let newr = [...cats].filter(h => h._id != id)
            setcat(newr)

        }


    }

    console.log(cats)
    useEffect(() => (
        getcategory(),
        deleteca()
    )


        , [])


    return (

        <div>
            <SideNav />
            <table className=' text-dark w-25 rounded shadow border '>
                <tr className=' text-dark w-25 rounded shadow border '>
                    <td className="ttable">category</td>
                    <td className="ttable">Action</td>

                </tr>
                {cats.map(cat =>
                    <tr key={cat._id} >

                        <td className="ttable">{cat.description}</td>

                        <td className="ttable">
                            <Link to="#" onClick={() => deleteca(cat._id)} ><i class="material-icons" data-toggle="tooltip" title="Delete">  &#xE872;</i></Link>
                            <Link to={`UpdateCategory/${cat._id}`}><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Link>
                        </td>
                    </tr>


                )







                }
            </table>
            <button style={{ float: 'left', marginTop: '2rem' }} className='pbtn  btn btn-outline-primary mx-5 rounded shadow border ' ><a href="/AddGategory">Add category</a></button>
            <div style={{ marginTop: '7.3rem' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ee7752" fill-opacity="0.6" d="M0,320L34.3,304C68.6,288,137,256,206,245.3C274.3,235,343,245,411,234.7C480,224,549,192,617,197.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,160C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    )
}
