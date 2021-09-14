import express from 'express';
import {getClients,createClient,deleteClient,updateClient,getoneClient,getClientsbyname,getClientInfo} from '../controllers/client.js'
// import client from '../models/client.js';

const router = express.Router();

router.get('/',getClients);
router.get('/:id',getoneClient);
router.post('/',createClient);
router.delete('/:id',deleteClient);
router.put('/:id',updateClient);
router.get('/clientbyname/:sname',getClientsbyname);
router.get('/getClientInfo/:id',getClientInfo);

export default router;