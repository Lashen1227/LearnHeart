const express = require('express');
const {
    getAllVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer
} = require('../controllers/volunteerController');
const router = express.Router();

router.get('/', getAllVolunteers);
router.get('/:id', getVolunteer);
router.post('/', createVolunteer);
router.put('/:id', updateVolunteer);
router.delete('/:id', deleteVolunteer);

module.exports = router;