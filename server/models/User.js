const mongoose = require('mongoose');
const { Schema } = mongoose;

const facebookSchema = new Schema({
    kind: {type: String, default: 'facebook'},
    id: String
})

// const googleSchema = new Schema({
//     kind: {type: String, default: 'google'},
// })

const localSchema = new Schema({
    kind: {type: String, default: 'local'},
    username: String,
    passwor: String
})

const userScehmea = new Schema({
    name: String,
    email: String,
    gender: String,
    accounts: [
        facebookSchema,
        localSchema
    ]
})


mongoose.model('users', userScehmea);