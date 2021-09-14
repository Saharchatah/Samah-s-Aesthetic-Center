import ExpensepaymentData from '../models/expensepayment.js';

import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

export const getExpensepayments = async (req, res) => {
    try {

        const allExpensepayments = await ExpensepaymentData.find();
        res.status(200).json(allExpensepayments);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};
export const getExpensepayments2 = async (req, res) => {
    try {

        let shi = await ExpensepaymentData.aggregate([
            {
                $lookup: {
                    from: 'expenses',
                    localField: 'id_expense',
                    foreignField: '_id',
                    as: 'expense'
                }
            },
            {
                $unwind: {
                    path: '$expense'
                }
            }
        ]);

        res.json(shi);
        

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getoneExpensepayment = async (req, res) => {
    const id = req.params.id;
    try {
        const oneExpensepayment = await ExpensepaymentData.findById(id).exec();
        res.status(200).json(oneExpensepayment);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const createExpensepayment = async (req, res) => {
    const expensepayment = req.body;

    const newExpensepayment = new ExpensepaymentData(expensepayment);
    try {
        await newExpensepayment.save();
        res.status(201).json(newExpensepayment);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteExpensepayment = async (req, res) => {
    const id = req.params.id;

    try {
        await ExpensepaymentData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateExpensepayment = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await ExpensepaymentData.updateOne({ _id: ObjectID(id) }, {

        $set: body
    })

    res.status(200).json({ success: true })
}

