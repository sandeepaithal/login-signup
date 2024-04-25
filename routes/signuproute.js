const express = require('express');
const router = express.Router();
const Signup = require('../models/adminsignup.js'); 
const bcrypt=require('bcrypt')

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log('Data type of password:', typeof password);

    const salt= await bcrypt.genSalt(10);
    // console.log(salt);


    const hashedpassword = await bcrypt.hash(password, salt);
      

    const newSignup = new Signup({ name, email, password:hashedpassword });
 
    await newSignup.save();
  
    res.status(201).json({ message: 'Signup successful' });
  } catch (error) {
    
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
