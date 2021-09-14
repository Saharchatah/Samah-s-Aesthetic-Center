import express from 'express';
import { getExpensepayments2, getExpensepayments, createExpensepayment, deleteExpensepayment, updateExpensepayment, getoneExpensepayment } from '../controllers/expensepayment.js'


const router = express.Router();

router.get('/', getExpensepayments2);
router.get('/:id', getoneExpensepayment);
router.post('/', createExpensepayment);
router.delete('/:id', deleteExpensepayment);
router.put('/:id', updateExpensepayment);



export default router;
