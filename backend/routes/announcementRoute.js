const express = require('express');
const { createAnnouncement, getAnnouncements, reactToAnnouncement } = require('../controllers/announcementController');
const router = express.Router();

router.post('/create', createAnnouncement);
router.get('/', getAnnouncements);
router.post('/react', reactToAnnouncement);

module.exports = router;
