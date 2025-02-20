const mongoose = require("mongoose");

const volunteerRequestSchema = new mongoose.Schema(
  {
    qualifications: { type: String, required: true },
    language: { type: String, required: true },
    subjects: { type: String, required: true },
    organization: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
    availableDates: { type: [String], required: true },
    cv: { type: String }, // Store CV file path
  },
  { timestamps: true }
);

module.exports = mongoose.model("VolunteerRequest", volunteerRequestSchema);