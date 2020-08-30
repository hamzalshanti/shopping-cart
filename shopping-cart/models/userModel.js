const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.encryptPassword = async function(password) {
    const salt = await bcrypt.genSalt(5);
    const hashPassword = await bcrypt.hash(password, salt)
    return hashPassword;
}
userSchema.methods.isMatch = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('user', userSchema);