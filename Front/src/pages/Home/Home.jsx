
// async function allclients() {
//     await axios.get(`http://localhost:5000/clients`).then(res => {
//         let result = res.data;
//         setclients(result)
//         clients.map(client =>
//             axios.get(`http://localhost:5000/clients/getClientInfo/${client._id}`).then(re => {

//                 let allinfo = re.data;
//                 console.log(allinfo)
//                 setapps(allinfo)
//             }

//             )
//         )
//     })
// }



import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SideNav from '../../components/SideNav/SideNav'
import './Home.css'
import moment from 'moment';


export default function Home() {
    let date = new Date();

    // let m = moment().format("dddd, MMMM(MM) Do YYYY, h:mm:ss a");
    // let m = moment().format("YYYY-MM-DD hh:mm a");



    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();


    const [app, setap] = useState([]);
    const [d, setd] = useState([]);
    const [clients, setclients] = useState([]);
    const [apps, setapps] = useState([]);
    const [services, setservices] = useState([]);



    async function getapp() {
        let r = await axios.get(`http://localhost:5000/appointments`)
            .then(res => {
                let y = res.data;
                let isfind = y.filter(f => f.date.slice(8, 10) == dd && f.date.slice(5, 7) == mm && f.date.slice(0, 4) == yyyy)
                setap(y)
                setd(isfind)
            })
    }

    console.log("my dates:", d)

    async function getclients() {
        let r = await axios.get(`http://localhost:5000/clients`)
            .then(res => {
                let result = res.data;
                setclients(result)
            })
    }



    console.log("clients:", clients)

    async function getservice() {
        await axios.get(`http://localhost:5000/appointmentsDT`)
            .then(res => {
                let result = res.data.app;
                console.log("my service", result)
                setservices(result)
            })

    }


    useEffect(() => {
        getclients()
        getapp()
        getservice()
    }, [])


    return (
        <div>

            <SideNav />

            {/* {dd}-{mm}-{yyyy} */}
            <br />

            <table className="tablee">
                <tr className="ttable"  >
                    <td className="ttable" ><b>Name</b></td>
                    <td className="ttable" ><b>Date</b></td>
                    <td className="ttable" ><b>Start Time</b></td>
                    <td className="ttable" ><b>End Time</b></td>
                    <td className="ttable" ><b>Service</b></td>
                </tr>

                {d.map(a =>
                    <tr className="ttable" key={a._id}>
                        <td className="ttable" >
                            {clients.filter(c => c._id == a.id_client)
                                .map(cl =>
                                    <div>
                                        {cl.firstname}-{cl.lastname}
                                    </div>
                                )}
                        </td>

                        <td className="ttable" >{a.date.slice(0, 10)}</td>
                        <td className="ttable">{a.starttime}</td>
                        <td className="ttable" >{a.endtime}</td>


                        <td className="ttable" >
                            {services.filter(s => s.id_appointment == a._id)
                                .map(se =>
                                    <ol>
                                        {se.service.description}-{se.service.price}-{se.service.currency}
                                    </ol>
                                )
                            }

                        </td>




                    </tr>
                )}
            </table>
            <div style={{ marginTop: '7.3rem' }} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ee7752" fill-opacity="0.6" d="M0,320L34.3,304C68.6,288,137,256,206,245.3C274.3,235,343,245,411,234.7C480,224,549,192,617,197.3C685.7,203,754,245,823,245.3C891.4,245,960,203,1029,186.7C1097.1,171,1166,181,1234,160C1302.9,139,1371,85,1406,58.7L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>

        </div>
    )
}


