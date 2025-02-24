const Event = require('../models/eventModel');

// Controller for adding a rating and comment to an event
exports.addRatingAndComment = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { userId, rating, comment, userName } = req.body;

    const event = await Event.findById(eventId);
    event.ratings.push({ userId, rating, comment, userName });
    await event.save();

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error adding rating and comment', error });
  }
};
