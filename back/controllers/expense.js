import ExpenseData from '../models/expense.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

export const getExpenses = async (req, res) => {
    try {
        const allExpenses = await ExpenseData.find();
        res.status(200).json(allExpenses);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getoneExpense = async (req, res) => {
    const id = req.params.id;
    try {
        const oneExpense = await ExpenseData.findById(id).exec();
        res.status(200).json(oneExpense);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const createExpense = async (req, res) => {
    const expense = req.body;
// console.log ("body",req.body);
// console.log ("expense",expense);
    const newExpense = new ExpenseData(expense);
    try {
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteExpense = async (req, res) => {
    const id = req.params.id;

    try {
        await ExpenseData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateExpense = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await ExpenseData.updateOne({ _id: ObjectID(id) }, {
    // const result = await ExpenseData.updateOne({ id_expense: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}

