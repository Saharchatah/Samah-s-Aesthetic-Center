import AppointmenDTtData from '../models/appointmentdetails.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;


export const getAppointmentsDT = async (req, res) => {
    try {
        const allAppointmentsDT = await AppointmenDTtData.find();
        res.status(200).json(allAppointmentsDT);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getoneAppointmentDT = async (req, res) => {
    const id = req.params.id;
    try {
        const oneAppointmentDT = await AppointmenDTtData.findById(id).exec();
        res.status(200).json(oneAppointmentDT);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createAppointmentDT = async (req, res) => {
    const AppointmentDT = req.body;

    const newAppointmentDT = new AppointmenDTtData(AppointmentDT);
    try {
        await newAppointmentDT.save();
        res.status(201).json(newAppointmentDT);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteAppointmentDT = async (req, res) => {
    const id = req.params.id;

    try {
        await AppointmenDTtData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateAppointmentDT = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await AppointmenDTtData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}

export const get_allappD = async (req, res) => {

    let app = await AppointmenDTtData.aggregate([
        {
            $lookup: {
                from: 'services',
                localField: 'id_service',
                foreignField: '_id',
                as: 'service',
            }
            },
            {
                $unwind: {
                    path: '$service'
                }
            },
            
      
    ])

    res.json({ app });
}