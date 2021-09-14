import mongodb from 'mongodb';
import CategoryData from '../models/category.js';

const ObjectID = mongodb.ObjectID;

export const getCategories = async (req, res) => {
    try {
        const allCategories = await CategoryData.find();
        res.status(200).json(allCategories);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getCategoryById = async (req, res) => {
    const id = req.params.id;
    try {
        const category = await CategoryData.findById(id).exec();
        res.status(200).json(category);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const createCategory = async (req, res) => {
    const category = req.body;

    const newCategory = new CategoryData(category);
    try {
        await newCategory.save();
        res.status(201).json(newCategory);
        // res.status(201).json({success:true,newCategory});
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteCategory = async (req, res) => {
    const id = req.params.id;

    try {
        await CategoryData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateCategory = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await CategoryData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}
