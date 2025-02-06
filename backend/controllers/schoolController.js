const { default: mongoose } = require('mongoose');
const School = require('../models/schoolModel');

exports. createschool = async(req,res)=>{
    try{
        const {schoolName,contact,username,email,password} = req.body;
        
        if(!schoolName|| !username || !email || !password){
            return res.status(400).json({error: 'All fields are required'});

        }
        const school = await School.create({ schoolName,contact,username,email,password});
        res.status(200).json(school);
    }catch(error){
        if(error.code === 11000){
            return res.status(400).json({error: 'School already exists'});
        }
        res.status(400).json({error: error.message});
    }


    
};

exports.getSchool = async (req, res) => {
    const { email } = req.params;

    // Validate email format
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // Check if school exists with given email
        const school = await School.findOne({ email });

        // If no school found
        if (!school) {
            return res.status(404).json({ error: 'No school found with this email' });
        }

        // Return school data
        res.status(200).json(school);

    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};
exports.getAllschools = async (req, res) => {
    const schools = await School.find({}).sort({createdAt: -1});
    setTimeout(() => {
        console.log(schools)
        res.status(200).json(schools);
    }, 2000);
}

// Delete School by Email
exports.deleteSchool = async (req, res) => {
    const { email } = req.params;

    // Validate email format
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // Find and delete school
        const school = await School.findOneAndDelete({ email });

        // If no school found
        if (!school) {
            return res.status(404).json({ error: 'No school found with this email' });
        }

        // Return deleted school data
        res.status(200).json({ 
            message: 'School deleted successfully', 
            deletedSchool: school 
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};

// Update School by Email
exports.updateSchool = async (req, res) => {
    const { email } = req.params;
    const updates = req.body;

    // Validate email format
    if (!email || !email.includes('@')) {
        return res.status(400).json({ error: 'Invalid email format' });
    }

    try {
        // Find and update school
        const school = await School.findOneAndUpdate(
            { email }, 
            updates, 
            { 
                new: true,      // Return updated document
                runValidators: true // Run model validations
            }
        );

        // If no school found
        if (!school) {
            return res.status(404).json({ error: 'No school found with this email' });
        }

        // Return updated school data
        res.status(200).json({ 
            message: 'School updated successfully', 
            updatedSchool: school 
        });

    } catch (error) {
        res.status(500).json({ error: 'Server error', details: error.message });
    }
};