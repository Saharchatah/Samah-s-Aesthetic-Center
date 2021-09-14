import mongoose from 'mongoose';
var Schema = mongoose.Schema;


const appointmentDTSchema = mongoose.Schema({

    id_service:
    {
        type: Schema.Types.ObjectId,
        ref: 'service'
    },

    id_appointment:
    {
        type: Schema.Types.ObjectId,
        ref: 'appointment'
    },

    notes: String,

    price: Number, 

});

const appointmentDT = mongoose.model('appointmentDT', appointmentDTSchema);

export default appointmentDT;