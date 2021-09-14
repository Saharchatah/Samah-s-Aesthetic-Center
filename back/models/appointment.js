import mongoose from 'mongoose';
var Schema = mongoose.Schema;
const appointmentSchema = mongoose.Schema({
    id_client: {
        type: Schema.Types.ObjectId,
        ref: 'client'
    },
    starttime: String,
    endtime: String,
    date: Date,
    totalus: Number,
    totallb: Number,
    paid:{
        type: Boolean,
        default: 'false'
        }
});



const appointment = mongoose.model('appointment', appointmentSchema);

export default appointment;