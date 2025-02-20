const express = require('express');
const {
    getAllVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer,
    createVolunteerRequest,
    upload
} = require('../controllers/volunteerController');
const router = express.Router();

router.get('/', getAllVolunteers);
router.get('/:id', getVolunteer);
router.post('/', createVolunteer);
router.put('/:id', updateVolunteer);
router.delete('/:id', deleteVolunteer);
router.post("/request", upload.single("cv"), createVolunteerRequest);

module.exports = router;