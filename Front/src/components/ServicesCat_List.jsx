import axios from 'axios'
import React, { useEffect, useState } from 'react'
import api from '../api';
import AddApp from './AddApp/AddApp.css';


function ServicesCat_List(props) {

    const [servs, setservs] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (props.idCat && props.idCat != "") {
                const res = await api.get(`servicees/${props.idCat}`);
                let result = res.data;
                setservs(result);
            } else { setservs([]); }
        }
        fetchData();
    }, [props.idCat])

    return (
        <>

            {/* <select
            name 
            onChange
            defaultValue
            defaultChecked
            >
                <option
                    name
                    value
                    id
                    selected
                >
                    aekjv
                </option>
            </select> */}


            <div>

                <select
                
            id='service'
            className="form-control"
                    name={props.name}
                    onChange={props.onChange}
                >

                    <option
                        value=""
                        selected={props.idSer === ""}
                    >
                        Services
                    </option>

                    {servs.map(serv => (

                        <option
                            key={serv._id}
                            value={serv._id}
                            selected={props.idSer === serv._id}
                        >
                            {serv.description}
                        </option>

                    ))}

                </select>

            </div>
        </>
    )
}

export default ServicesCat_List
