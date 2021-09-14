import React, { useEffect, useState } from 'react'
import API from '../../api'
import { useHistory } from "react-router"
import CategoryList from '../CategoryList';
import ServicesCat_List from '../ServicesCat_List';
import './AddApp.css';
import axios from 'axios';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import SideNav from '../SideNav/SideNav';

export default function AddApp(props) {


    const [getclient, setgetclient] = useState("")
    const [r, setr] = useState("");


    console.log("mmmm", getclient)

    async function getapp() {
        let r = await axios.get(`http://localhost:5000/clients`)
        setr(r.data)
    }



    useEffect(() => (
        getapp()
    ), [])


    let history = useHistory();

    const [state, updateState] = useState({
        name: "",
        starttime: "",
        endtime: "",
        date: "",
        categoryy: "",
        id_service: "",
        notes: "",
        tus: 0,
        tlb: 0,
        payDollar: 0,
        paid: "false",
        payLebanon: 0,
        works: []
    })

    async function setState(nextState) {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }))
    }

    function handleChange(e) {
        let { name, value } = e.target;
        setState({ [name]: value })
    }


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let reqBody = {

                id_client: getclient._id,
                starttime: state.starttime,
                endtime: state.endtime,
                date: state.date,
                totalus: state.tus,
                totallb: state.tlb,
                paid: state.paid
            };
            console.log({ reqBody });
            await API.post(`appointments`, reqBody)
                .then(async res => {
                    const data = res.data;
                    console.log(res)

                    let id_appointment = data._id;

                    state.works.map(async work => {

                        let detailsReqBody = {
                            id_service: work.id_service,
                            id_appointment: id_appointment,
                            notes: work.note,
                            price: parseInt(work.price)
                        }
                        await API.post(`appointmentsDT`, detailsReqBody);
                        history.push("/Appointment")

                    });
                });
        } catch (e) {
            console.log("ERR: ", e);
        }

    };

    async function setChangeNote(id, value) {
        let w = state.works;
        let a = await w.find(d => d.id == id);
        a.note = value;
        setState({ works: w });
    }

    async function setprice(id, value) {
        let w = state.works;
        let a = await w.find(d => d.id == id);
        a.price = value;
        setState({ works: w });

        let lb = 0;
        let dol = 0;
        w.map(d => (d.currency == "LB" && d.price != "") ? lb += parseInt(d.price) : dol += parseInt(d.price));
        setState({
            tlb: lb,
            tus: dol
        });
    }

    async function addrow() {

        let w = state.works;
        let id = 0;
        (w.length) ? id = w[w.length - 1].id + 1 : id = 0;

        let lb = 0;
        let dol = 0;

        w.map(d =>
            (d.currency == "LB" && d.price != "") ?
                lb += parseInt(d.price) :
                dol += parseInt(d.price)
        );

        setState({ tlb: lb, tus: dol });

        if (state.categoryy && state.id_service && state.categoryy != "" && state.id_service != "") {

            await API.get(`service/${state.id_service}`)
                .then(res => {
                    const result = res.data;
                    w.push({
                        id: id,
                        id_service: state.id_service,
                        price: result.price,
                        currency: result.currency,
                        service: result.description,
                        note: "Add Note"
                    });
                });
            setState({ id_service: "", categoryy: "" });
        }
    }

    return (
        <div className="h">
            <SideNav/>
            <form onSubmit={handleSubmit}>

                <div >

   <Autocomplete
                        className='theauto text-dark w-25 rounded shadow border '
                        id="combo-box-demo"
                        options={r}
                        onChange={(e, v) => setgetclient(v)}
                        getOptionLabel={(option) => option.firstname + " " + option.lastname}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="choose a name" variant="outlined" required />} />
                    <br />

                        <h2 className="clientname">{getclient.firstname}-{getclient.lastname}-{getclient.phonenumber}</h2>


            


                <br />

                <div className="SED " >
                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>
                        <h4 className="text-muted mb-2">Date:</h4>
                        <input
                            id="DTT"
                            className='text-dark w-25 rounded shadow border '
                            required
                            type="date"
                            value={state.date}
                            name="date"
                            onChange={handleChange}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>
                        <h4 className="text-muted mb-2"> Start Time:</h4>
                        <input
                            id="DTT"
                            className='text-dark w-25 rounded shadow border '
                            required
                            type="time"
                            value={state.starttime}
                            name="starttime"
                            onChange={handleChange}

                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1.5rem' }}>

                        <h4 className="text-muted mb-2"> End Time:</h4>
                        <input
                            id="DTT"
                            className='text-dark w-25 rounded shadow border '
                            required
                            type="time"
                            value={state.endtime}
                            name="endtime"
                            onChange={handleChange}
                        />
                    </div>

                    </div>

                </div>


                <div className="CSA" >

                    <CategoryList

                        name="categoryy"
                        _id={state.categoryy}
                        onChange={handleChange}
                    />

                    <ServicesCat_List


                        name="id_service"
                        idCat={state.categoryy}
                        idSer={state.id_service}
                        onChange={handleChange}
                    />

                    <button  id='serive'  className=' shadow  btn btn-outline-danger' type="button" onClick={addrow}>add</button>
                </div>


                <table className="table ">

                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Note</th>
                    </tr>

                    {state.works.map(work =>
                        <tr class="rowoftable" key={work.id}>

                            <th>
                                {work.service}
                            </th>

                            <th style={{display:'flex', flexDirection:'row'}}>
                                <input
                                 className="pricework"
                                    type="number"
                                    value={work.price}
                                    onChange={(e) => setprice(work.id, e.target.value)}
                                />
                                <h6>{work.currency}</h6>
                            </th>

                            <th>

                                <input 
                                className="note"
                                type="text" 
                                    value={work.note}
                                    onChange={(e) => setChangeNote(work.id, e.target.value)}
                                />
                            </th>

                        </tr>
                    )}

                    <tr  >
                        <th>Totale</th>
                        <th >{state.tus}&nbsp;&nbsp; $</th>
                        <th >{state.tlb}&nbsp;&nbsp; LB</th>
                    </tr>

                </table>

            
                {/* 
                Payment $
                <input
                    type="number"
                    value={state.payDollar}
                    name="payDollar"
                    onChange={handleChange}
                />
                <br /><br />


                Payment LB
                <input
                    type="number"
                    value={state.payLebanon}
                    name="payLebanon"
                    onChange={handleChange}
                />
                <br /><br /> */}

                <button className='saveb shadow  btn btn-outline-danger' type="submit">save</button>

            </form>
        </div>
    )
}
