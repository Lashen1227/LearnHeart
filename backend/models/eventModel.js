const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    schoolName: { type: String, required: true },
    location: { type: String, required: true },
    grade: { type: String, required: true },
    subject: { type: String, required: true },
    date: { type: String, required: true },
    images: [{ type: String }],
    ratings: [{ type: Number }], // Store ratings
    comments: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
        username: { type: String, default: "Unknown User" },
        text: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
