const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  grade: { type: Number, required: true },
  type: { type: String, required: true }, // e.g., "Notes", "Seminar videos"
  description: { type: String },
  url: { type: String, required: true },
  subject: { type: String, required: true },
});

module.exports = mongoose.model('Resource', resourceSchema);

