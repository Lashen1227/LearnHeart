const express = require('express');
const router = express.Router();
const {createschool} = require('../controllers/schoolController');

router.post('/createSchool',createschool);
module.exports = router;