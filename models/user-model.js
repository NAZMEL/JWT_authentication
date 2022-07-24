const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
});

const UserModel = model('Users', UserSchema);

module.exports = UserModel;