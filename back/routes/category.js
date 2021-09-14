import express from 'express';
import {getCategories,createCategory,deleteCategory,updateCategory,getCategoryById} from '../controllers/category.js'
// import client from '../models/client.js';

const router = express.Router();

router.get('/',getCategories);
router.get('/:id',getCategoryById);
router.post('/',createCategory);
router.delete('/:id',deleteCategory);
router.put('/:id',updateCategory);

export default router;
