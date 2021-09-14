
import React, { useEffect,useState } from 'react'
import {useHistory } from 'react-router-dom'
import axios from 'axios';
import ClientAppointmentItem from './ClientAppointmentItem';
import SideNav from '../../components/SideNav/SideNav';

function ClientAppointments({_id}) {
    
    let history = useHistory();
    
    const [appointmentlist, setAppointmentlist] = useState([]);
    

    const requestappointment = async () => {
  
        await axios
        .get(`http://localhost:5000/clients/getClientInfo/${_id}`)
        .then((response) => {
          setAppointmentlist(response.data.appointments);
          console.log("aapp",response.data);
      });
    
    
  }
  useEffect(() => {
    requestappointment();
  }, []);
  
  
  const allClientAppointments = 
  appointmentlist.map((appointment) => (
    <ClientAppointmentItem
      key={appointment._id}
      id_client={appointment.id_client}
     starttime={appointment.starttime}
     endtime={appointment.endtime}
     date={appointment.date}
     
    
      id={appointment._id}
    />
  ));
  

    return (
        <div>
          
          
            <SideNav/>
            
            <div className='container  mt-5 text-dark shadow '>
                <ul style={{listStyleType:'none'}}>
                <li >
                  <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
                  
                  <input type='text' className='text-dark w-20 border-0 ' value="Date" disabled />
                    <input type='text' className='text-dark w-25 border-0 ' value="Start time" disabled />
                    {/* <label  className='text-dark w-25 rounded  border ' >Start time </label> */}
                    <input type='text' className='text-dark w-25 border-0 ' value="End time" disabled />
                    
                    
                    
                  </div>
                  <hr style={{ border:'none',borderTop: '2px dotted'}} />
                </li>

                    {allClientAppointments}
                   

                </ul>
            </div>
        </div>
    )
}


export default ClientAppointments
