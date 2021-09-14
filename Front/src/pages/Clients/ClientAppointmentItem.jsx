import React from 'react'

import moment from 'moment'


function ClientAppointmentItem(props) {
    
     
        return (
            <>
          <li >
            <div className='' style={{ display: 'flex', justifyContent: 'space-between' }}>
            
            <input type='text' className='text-dark w-20 rounded shadow border ' value={moment(props.date).format('DD-MM-YYYY')} disabled />
              <input type='text' className='text-dark w-25 rounded shadow border ' value={props.starttime} disabled />
              <input type='text' className='text-dark w-25 rounded shadow border ' value={props.endtime} disabled />
              
              
              
            </div>
            <hr  />
          </li>
        </>
        )
    }
    
    

export default ClientAppointmentItem
