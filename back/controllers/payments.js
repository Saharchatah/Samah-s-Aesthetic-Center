import PaymentData from '../models/payments.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

export const getAll = async (req, res) => {
    try {
        const allPayments = await PaymentData.find();
        res.status(200).json(allPayments);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getOne = async (req, res) => {
    const id = req.params.id;
    try {
        const payment = await PaymentData.findById(id).exec();
        res.status(200).json(payment);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const create = async (req, res) => {
    const payment = req.body;

    const newPayment = new PaymentData(payment);
    try {
        await newPayment.save();
        res.status(201).json(newPayment);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const remove = async (req, res) => {
    const id = req.params.id;

    try {
        await PaymentData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const update = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await PaymentData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true, result })
}