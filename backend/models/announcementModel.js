const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  orgId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
  professionalData: { type: String },
  reactions: { type: [String], default: [] },
}, { timestamps: true });

const Announcement = mongoose.model('Announcement', announcementSchema);

module.exports = Announcement;