const express = require('express');
const {
    getAllVolunteers,
    getVolunteer,
    createVolunteer,
    updateVolunteer,
    deleteVolunteer,
    createVolunteerRequest,
    getVolunteerRequests,
    acceptVolunteerRequest,
    rejectVolunteerRequest,
    upload
} = require('../controllers/volunteerController');
const router = express.Router();

router.get('/', getAllVolunteers);
router.get('/:id', getVolunteer);
router.post('/', createVolunteer);
router.put('/:id', updateVolunteer);
router.delete('/:id', deleteVolunteer);
router.post("/request", upload.single("cv"), createVolunteerRequest);
router.post("/volunteer-requests", getVolunteerRequests);
router.post('/accept', acceptVolunteerRequest);
router.post('/reject', rejectVolunteerRequest);

module.exports = router;