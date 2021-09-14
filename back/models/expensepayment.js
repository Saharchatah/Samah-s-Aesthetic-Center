import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const expensepaymentSchema = mongoose.Schema({
    
    description:String,
    id_expense: { type: Schema.Types.ObjectId, ref: 'expense' },
    price:Number,
    id_currency:Number,
    paymentdate:Date
});

const expensepayment = mongoose.model('expensepayment',expensepaymentSchema);

export default expensepayment;