import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
    description: String,
});

const category = mongoose.model('category', categorySchema);

export default category;

