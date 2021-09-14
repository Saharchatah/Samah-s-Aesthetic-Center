import express from 'express';
import {getAppointments,createAppointment,deleteAppointment,updateAppointment,getoneAppointment} from '../controllers/appointment.js'
// import client from '../models/client.js';

const router = express.Router();

router.get('/',getAppointments);
router.get('/:id',getoneAppointment);
router.post('/',createAppointment);
router.delete('/:id',deleteAppointment);
router.put('/:id',updateAppointment);

export default router;
