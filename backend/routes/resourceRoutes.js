const express = require('express');
const {
  getAllResources,
  addResource,
  updateResource,
  deleteResource,
} = require('../controllers/ResourceController'); // Fixed the case of the filename

const router = express.Router();

// Routes
router.get('/', getAllResources);
router.post('/', addResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

module.exports = router;


