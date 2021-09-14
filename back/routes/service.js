import express from 'express';
import {
    getServices, createService, deleteService, updateService, getServiceById, get_services
} from '../controllers/service.js'
// import client from '../models/client.js';

const router = express.Router();

router.get('/', get_services);
router.get('/:id', getServiceById);
router.post('/', createService);
router.delete('/:id', deleteService);
router.put('/:id', updateService);


export default router;
