const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: { type: String, required: true },
    eventDate: { type: Date, required: true },
    eventLocation: { type: String, required: true },
    description: { type: String },
    thumbnail: { type: String },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
