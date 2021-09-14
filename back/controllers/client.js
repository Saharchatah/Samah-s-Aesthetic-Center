import Appointment from '../models/appointment.js';
import Service from '../models/service.js'
import ClientData from '../models/client.js';
import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

export const getClients = async (req, res) => {
    try {
        const allClients = await ClientData.find().sort("firstname");
        res.status(200).json(allClients);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const getoneClient = async (req, res) => {
    const id = req.params.id;
    try {
        const oneClient = await ClientData.findById(id).exec();
        res.status(200).json(oneClient);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};


export const getClientsbyname = async (req, res) => {
    const searchname = req.params.sname;
    try {
        const filterClient = await ClientData.find({ "firstname": searchname }).exec();
        res.status(200).json(filterClient);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createClient = async (req, res) => {
    const client = req.body;
    console.log("savin:");
    const newClient = new ClientData(client);
    try {
        await newClient.save();
        res.status(201).json(newClient);
        // console.log("newclient",newClient );
    } catch (error) {
        res.status(409).json({ message: error.message });

    }
};

export const deleteClient = async (req, res) => {
    const id = req.params.id;

    try {
        await ClientData.findByIdAndRemove(id).exec();
        res.send('Successfully deleted')
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error);

    }
};

export const updateClient = async (req, res) => {

    const id = req.params.id;
    const body = req.body;

    const result = await ClientData.updateOne({ _id: ObjectID(id) }, {
        $set: body
    })

    res.status(200).json({ success: true })
}

export const getClientInfo = async (req, res) => {

    const id = req.params.id;

    try {

        const client = await ClientData.findById(id).exec();

        const appointments = await Appointment.aggregate([
            {
                '$match': {
                    'id_client': ObjectID(id)
                }
            },
            {
                '$lookup': {
                    "from": "appointmentdts",
                    "as": "details",
                    "let": { "appID": "$_id" },
                    "pipeline": [
                        {
                            "$match": {
                                "$expr": {
                                    "$eq": ["$id_appointment", "$$appID"]
                                }
                            }
                        },
                        {
                            "$lookup": {
                                "from": 'services',
                                "as": "service",
                                "let": { "serviceID": "$id_service" },
                                "pipeline": [
                                    {
                                        "$match": {
                                            "$expr": {
                                                "$eq": ["$_id", "$$serviceID"]
                                            }
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            '$addFields': {
                                'service': {
                                    '$arrayElemAt': ["$service", 0]
                                }
                            }
                        }
                    ]
                }
            }
        ])

        res.status(200).json({
            client,
            appointments
        })

    } catch (e) { }
}

