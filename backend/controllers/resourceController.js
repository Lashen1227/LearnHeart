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

// Update an existing resource
const updateResource = async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json(updatedResource);
  } catch (err) {
    res.status(400).json({ message: 'Error updating resource', error: err });
  }
};

// Delete a resource
const deleteResource = async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json({ message: 'Resource deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting resource', error: err });
  }
};

module.exports = {
  getAllResources,
  addResource,
  updateResource,
  deleteResource,
};