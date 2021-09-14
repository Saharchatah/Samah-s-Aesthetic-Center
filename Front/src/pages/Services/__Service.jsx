// import React, { useState } from 'react'
// import axios from 'axios';
// import { Redirect } from 'react-router-dom'
// import CategoryList from "../../components/CategoryList.jsx"

// function Addservice() {
//   const [redirect, setRedirect] = useState(false);
//   const [service, setservice] = useState({});

//   const addservice = (e) => {
//     e.preventDefault();
//     let  s= axios.post("http://localhost:5000/service", service)

//       console.log(s)
//       console.log("success")
//     setRedirect(true);
//   };
//   if (redirect) { return <Redirect to="/Payment" />; }

//   return (
//     <div>
//       <div>Add service Page</div>
//       <form onSubmit={addservice}>

//       {/* <CategoryList  onChange={(e) => {
//             setservice({ ...service, id_category: e.target.value })
//           }}
//                 /> */}
//                 <br />
// <br/>

//         <label >description</label>
//         <input
//           name="description"
//           onChange={(e) => {
//             setservice({ ...service, description: e.target.value })
//           }}
//           type="text"

//         ></input>
//         <label >price</label>
//         <input
// required

//           type="text"
//           name="price"
//           onChange={(e) => {
//             setservice({ ...service, price: e.target.value })
//           }}
//         ></input>



//         <br />

//         <select onChange={(e) => {
//             setservice({ ...service, id_currency: e.target.value })
//           }}>

//           <option value={null}>Currency</option>
//           <option value="LB">LB</option>
//           <option value="$">$</option>
//         </select>

//         <br />


//         <button onClick={() => addservice} >
//           ADD
//         </button>

//       </form>
//     </div>
//   )
// }

// export default Addservice
