import ServiceData from '../models/service.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

export const getServices = async (req, res) => {
    try {
        const allServices = await ServiceData.find();
        res.status(200).json(allServices);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getServiceById = async (req, res) => {
    const id = req.params.id;
    try {
        const service = await ServiceData.findById(id).exec();
        res.status(200).json(service);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const createService = async (req, res) => {
    const service = req.body;

    const newService = new ServiceData(service);
    try {
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteService = async (req, res) => {
    const id = req.params.id;

    try {
        await ServiceData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateService = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await ServiceData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}



export const services_onecat = async (req, res) => {

    const id = req.params.id;
    try {
        const service = await ServiceData.find({ id_category: id })
            .populate("category")
            .then(servicee => {
                res.json(servicee);
            });


    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const get_services = async (req, res) => {

    let services = await ServiceData.aggregate([
        {
            $lookup: {
                from: 'categories',
                localField: 'id_category',
                foreignField: '_id',
                as: 'category'
            }
        },
        {
            $unwind: {
                path: '$category'
            }
        }
    ])

    res.json({services});
}




