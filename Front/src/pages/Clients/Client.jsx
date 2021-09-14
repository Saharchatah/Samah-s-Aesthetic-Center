import React, { useEffect,useState } from 'react'
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import ClientItem from './ClientItem';
import SideNav from '../../components/SideNav/SideNav'
function Client() {

    let history = useHistory();
    const addClick = () => {
        history.push("/AddClient");
    }
    
    const [clientlist, setClientlist] = useState([]);
    const [searchinput,setSearchinput] = useState(0);
    const [clientsearchname,setClientsearchname] = useState({});
    const [searchdata,setSearchdata] = useState({});
    
    const afterUpdate = async()=>{
      console.log("after updt, before request");
      
      await request(0);
      console.log("after  request");
    }

    const request = async (s) => {
        if (s === 0){
            await axios
            .get("http://localhost:5000/clients")
            .then((response) => {
                setClientlist(response.data);
          });
        }
        else {
            console.log(searchinput)
            await axios
            .get(`http://localhost:5000/clients/clientbyname/${clientsearchname}`)
            .then((response) => {
                setSearchdata(response.data[0])
                setSearchinput(1);
              console.log("search input data result:",response.data[0])
          });
        }
        
      };
    useEffect(() => {
      request(0);
    }, []);


    const allClients = clientlist.map((client) => (
        <ClientItem
          key={client._id}
          firstname={client.firstname}
         lastname={client.lastname}
         phonenumber={client.phonenumber}
        
          id={client._id}
          afterUpdate={afterUpdate}
        />
      ));


    return (
        <div>
          <SideNav/>
          
            <h3 className="text-muted mb-2">Client Page</h3>
            <div className="input-group mb-4 container ">
            
                  <input type="text" className='text-dark w-60 rounded shadow border' placeholder="Search.." name="search" onChange = {(e)=>{setClientsearchname(e.target.value);}} />
                  <button type="submit" onClick={(e)=>{e.preventDefault();request(1)}} className="shadow"><i className="bi bi-search "></i></button>
            
              {/* <input type="text" id="search" className="text-dark w-25 rounded shadow border" placeholder="search" /> */}
                  <button className='pbtn  btn btn-outline-primary mx-5 rounded shadow border '  onClick={addClick}>Add Client</button>
            </div>
            
            <div className='container  mt-5 text-dark shadow '>
                <ul >
                    {/* {allClients} */}
                    { searchinput===0 ? allClients 
                                      : <ClientItem
                                                    key={searchdata._id}
                                                    firstname={searchdata.firstname}
                                                    lastname={searchdata.lastname}
                                                    phonenumber={searchdata.phonenumber}
                                                    
                                                    id={searchdata._id}
                                                    /> 
                    }

                </ul>
            </div>
        </div>
    )
}

export default Client
