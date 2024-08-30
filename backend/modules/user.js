const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    eventsRegistered: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }],
    eventsHosted: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    }]
}, 
{ timestamps: true }
);


module.exports = mongoose.model('User', UserSchema);
