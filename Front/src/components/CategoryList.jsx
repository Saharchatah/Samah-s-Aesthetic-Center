import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddApp from './AddApp/AddApp.css';

export default function CategoryList(props) {

    const [categorys, setcat] = useState([]);

    useEffect(() => {

        async function getcat() {
            let response = await axios.get("http://localhost:5000/category")
            let result = response.data;
            setcat(result);
        }

        getcat()
    }, [props._id])

    return (
        <div>

            <select
                name={props.name}
                onChange={props.onChange}
                id=" service"
                className=" kk form-control"
            >
                <option
                    value=""
                    selected={props._id === ""}
                >
                    category
                </option>

                {categorys.map(category => (
                    <option
                        key={category._id}
                        value={category._id}
                        selected={props.id === category._id}
                        // selected={props._id === category._id}
                    >
                        {category.description}
                    </option>
                ))}

            </select>

        </div>
    )
}
