import mongoose from 'mongoose';


const clientSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    phonenumber:Number,
    address:{
        type: String,
        default: 'Tripoli'
        },
    birthyear:Number,
    referenceinfo:String,//min dall 3a samah clinic
    mstatus:String,
    needlecolor:String,
    hasillness:{
        type: String,
        default: 'No'
        },// marad mou3ayan
    heartbattery:{
        type: String,
        default: 'No'
        },// battariye bil  2alb
    metalrodinbody:{
        type: String,
        default: 'No'
        },// asyia5 bil jism
    allergictomedicin:{
        type: String,
        default: 'No'
        },//hassessieh to dawa
    allergictoanesthesia:{
        type: String,
        default: 'No'
        },//hassessieh to banj
    epileptic:{
        type: String,
        default: 'No'
        },
    artificiallimbs:{
        type: String,
        default: 'No'
        },//atraf sina3iyeh
    glasseye:{
        type: String,
        default: 'No'
        },
    ovariancyst:{
        type: String,
        default: 'No'
        },//keis 3al mabid
    hormonedisorder:{
        type: String,
        default: 'No'
        },
    hormonedoctor:{
        type: String,
        default: 'No'
        },
    glandproblem:{
        type: String,
        default: 'No'
        },//mashekel ghedeh
    whenwhereprehairremoval:{
        type: String,
        default: '_'
        },// when started, who removed them
    durationprehairremoval:{
        type: String,
        default: '_'
        },
    takemedecin:{
        type: String,
        default: 'No'
        },
    notes:String

});

const client = mongoose.model('client',clientSchema);

export default client;