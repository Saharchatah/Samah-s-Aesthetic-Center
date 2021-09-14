import AppointmentData from '../models/appointment.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;


export const getAppointments = async (req, res) => {
    try {
        const allAppointments = await AppointmentData.find();
        res.status(200).json(allAppointments);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getoneAppointment = async (req, res) => {
    const id = req.params.id;
    try {
        const oneAppointment = await AppointmentData.findById(id).exec();
        res.status(200).json(oneAppointment);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createAppointment = async (req, res) => {
    const Appointment = req.body;

    const newAppointment = new AppointmentData(Appointment);
    try {
        await newAppointment.save();
        res.status(200).json(newAppointment);
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteAppointment = async (req, res) => {
    const id = req.params.id;

    try {
        await AppointmentData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateAppointment = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await AppointmentData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}
