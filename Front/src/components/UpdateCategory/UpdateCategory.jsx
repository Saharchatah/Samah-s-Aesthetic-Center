import axios from 'axios';
import react, { useEffect, useState } from 'react'

import { useHistory } from 'react-router';

export default function  UpdateCategory(props){

    let id = props.match.params.id;
let history=useHistory();
const[c, setc] = useState("")

async function getcat(id){
  let s=  await axios.get(`http://localhost:5000/category/${id}`)
  setc(s.data)

}
console.log(c)


async function update(e){
    e.preventDefault();
        let reqbody={
        description:c
    }
    let y= await axios.put(`http://localhost:5000/category/${id}`, reqbody)
history.push('/category')
console.log(y)
}

useEffect(()=>{
    getcat(id)

},[])

     return(
         <div>
             <form onSubmit={update}>
             category
             <input type="text" value={c.description} onChange={(e) => setc(e.target.value)}/>
             <input type="submit" value="save"/>
             </form>
         </div>
     )
}
