const Resource = require('../models/ResourceModel'); // Assuming this is where your schema is defined

// Get all resources
const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resources', error: err });
  }
};

// Add a new resource
const addResource = async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ message: 'Error adding resource', error: err });
  }
};