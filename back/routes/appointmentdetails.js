import express from 'express';
import {getAppointmentsDT,createAppointmentDT,deleteAppointmentDT,updateAppointmentDT,getoneAppointmentDT
,get_allappD
} from '../controllers/appointmentdetails.js'
// import client from '../models/client.js';

const router = express.Router();

router.get('/',get_allappD);
router.get('/:id',getoneAppointmentDT);
router.post('/',createAppointmentDT);
router.delete('/:id',deleteAppointmentDT);
router.put('/:id',updateAppointmentDT);

export default router;
