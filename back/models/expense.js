import mongoose from 'mongoose';


const expenseSchema = mongoose.Schema({
    
    description:String,
});

const expense = mongoose.model('expense',expenseSchema);

export default expense;