import express from 'express';
import {getExpenses,createExpense,deleteExpense,updateExpense,getoneExpense} from '../controllers/expense.js'


const router = express.Router();

router.get('/',getExpenses);
router.get('/:id',getoneExpense);
router.post('/',createExpense);
router.delete('/:id',deleteExpense);
router.put('/:id',updateExpense);

export default router;
