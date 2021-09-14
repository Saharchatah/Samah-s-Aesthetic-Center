import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Oneservice(props) {


    const [mine, setservic] = useState("");
    const [err, seterr] = useState("")

    async function getservice() {

        let res = await axios.get(`http://localhost:5000/service/${props.iDSer}`)
        let result = res.data;

        console.log("my one service", result)

        setservic(result);

    }


    useEffect(() => {
        getservice()
    }, [props.iDSer])


    return (
        <div>
            {/* <h1>{props.idSer}</h1> */}
            {/* <table>
                <tr>
                    <th>service </th>
                    <th>price </th>
                    <th>currency </th>
                </tr>
                <tr>
                    <td>{mine.description}</td>
                    <td>{mine.price}</td>
                    <td>{mine.id_currency}</td>

                </tr>
   </table> */}

            <h4>{mine.description}</h4>
            <h4>{mine.price}</h4>
            <h4>{mine.id_currency}</h4>



            <h1>{err}</h1>
        </div>
    )
}

export default Oneservice
