const Comment = require('../models/commentModel');
const Event = require('../models/eventModel');

exports.addComment = async (req, res) => {
  const { userName, comment, eventId } = req.body;
  try {
    const newComment = new Comment({ userName, comment, eventId });
    await newComment.save();

    const event = await Event.findById(eventId);
    event.reviews.push(newComment);
    await event.save();

    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
