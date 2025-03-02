const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  userName: { type: String, default: "Unknown User" },
  comment: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
