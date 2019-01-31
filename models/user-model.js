var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: String,
    freeUser: { type: Boolean },
    confirmedEmail: {type: Boolean, default: false}
});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);