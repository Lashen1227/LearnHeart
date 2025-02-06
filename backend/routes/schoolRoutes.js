const express = require('express');
const router = express.Router();
const {createschool,
    getAllschools,
    getSchool,
    updateSchool,
    deleteSchool

} = require('../controllers/schoolController');

router.post('/',createschool);
router.get('/',getAllschools);
router.get('/:email',getSchool);
router.put('/:email',updateSchool);
router.delete('/:email',deleteSchool);
module.exports = router;