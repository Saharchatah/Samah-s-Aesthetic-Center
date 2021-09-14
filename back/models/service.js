import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const serviceSchema = mongoose.Schema({

    id_category:
    {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    description: String,
    price: Number,
    currency: String,
    time:String,

});

const service = mongoose.model('service', serviceSchema);

export default service;

