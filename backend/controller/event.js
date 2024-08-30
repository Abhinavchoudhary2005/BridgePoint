const Event = require('../modules/event');

const hostEvent = async (req, res) => {
    try {
        const { eventName, eventDate, eventLocation, description } = req.body;
        const thumbnail = req.file ? req.file.path : '';

        const newEvent = new Event({
            eventName,
            eventDate,
            eventLocation,
            description,
            thumbnail,
        });

        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find(); // Fetch all events from the database
        res.status(200).json(events); // Return the events in the response
        console.log(events)
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = { hostEvent, getAllEvents };
