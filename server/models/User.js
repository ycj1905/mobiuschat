const mongoose = require('mongoose');
const { Schema } = mongoose;

const facebookSchema = new Schema({
    kind: {type: String, default: 'facebook'},
    facebookId: String
})

// const googleSchema = new Schema({
//     kind: {type: String, default: 'google'},
// })

const localSchema = new Schema({
    kind: {type: String, default: 'local'},
    username: String,
    password: String
})

const userScehmea = new Schema({
    name: String,
    email: String,
    gender: String,
    city: String,
    // accounts: [
    //     localSchema || facebookSchema,
    // ]
    // accounts: [{type: localSchema || facebookSchema}]
    // accounts: [{type: facebookSchema || localSchema}]
    accounts: [Array]
})

mongoose.model('users', userScehmea);
