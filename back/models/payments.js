import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const paymentSchema = mongoose.Schema({
    id_appointment:{
        type: Schema.Types.ObjectId,
        ref: 'appointment'
    },
    payment_lb: Number,
    payment_dollar: Number
});

const payment = mongoose.model('payment', paymentSchema);

export default payment;