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