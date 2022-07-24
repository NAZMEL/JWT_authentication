const {Schema, model} = require("mongoose");

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'Users'},
    isActivated: {type: Boolean, default: false},
    refreshToken: {type: String, required: true}
});

const TokenModel = model('Tokens', TokenSchema);

module.exports = TokenModel;