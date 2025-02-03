const Volunteer = require("../models/volunteerModel");
const mongoose = require("mongoose");

//get all volunteers
const getAllVolunteers = async (req, res) => {
  const volunteers = await Volunteer.find({}).sort({ createdAt: -1 });
  res.status(200).json(volunteers);
};

//get single volunteer
const getVolunteer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such volunteer with that id" });
  }

  const volunteer = await Volunteer.findById(id);

  if (!volunteer) {
    return res.status(404).json({ error: "No such volunteer with that id" });
  }

  res.status(200).json(volunteer);
};

//create a volunteer
const createVolunteer = async (req, res) => {
  const {
    userID,
    name,
    description,
    volunteerId,
    status,
    address,
    phoneNumber,  // Added phoneNumber
    volunteerProfileImageAvailable,
    volunteerProfileColor,
    orgID
  } = req.body;

  let emptyFields = [];

  if (!name || !name.trim()) {
    emptyFields.push("name");
  }

  if (!description) {
    emptyFields.push("description");
  }

  if (!phoneNumber || !phoneNumber.trim()) {  // Check if phoneNumber is provided
    emptyFields.push("phoneNumber");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `The following fields are required`, emptyFields });
  }

  //add to database
  try {
    const volunteer = await Volunteer.create({
      userID,
      name,
      description,
      volunteerId,
      status,
      address,
      phoneNumber,  // Added phoneNumber to database creation
      volunteerProfileImageAvailable,
      volunteerProfileColor,
      orgID
    });
    res.status(200).json(volunteer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update a volunteer
const updateVolunteer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No volunteer with that id" });
  }

  const volunteer = await Volunteer.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
      // Ensure phoneNumber is included if it exists in the request body
    },
    { new: true }  // Ensures the updated volunteer is returned
  );

  if (!volunteer) {
    return res.status(400).json({ error: "No volunteer with that id" });
  }

  res.status(200).json(volunteer);
};

//delete a volunteer
const deleteVolunteer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No volunteer with that id" });
  }

  const volunteer = await Volunteer.findOneAndDelete({ _id: id });

  if (!volunteer) {
    return res.status(400).json({ error: "No volunteer with that id" });
  }

  res.status(200).json(volunteer);
};

module.exports = {
  getAllVolunteers,
  getVolunteer,
  createVolunteer,
  updateVolunteer,
  deleteVolunteer,
};
