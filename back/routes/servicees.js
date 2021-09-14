import express from 'express';
import {services_onecat} from '../controllers/service.js'

const router = express.Router();

router.get('/:id',services_onecat);

export default router;