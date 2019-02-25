const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchmea = new Schema({
    facebookId: String,
    // credits: { type: Number, default: 0 }
})
// const userSchmea = new Schema({
//     name: String,
//     pswd: String,
//     gender: String,
//     email: String,
//     city: String
// })

mongoose.model('users', userSchmea);