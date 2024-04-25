const express = require('express');
const router = express.Router();
const Signup = require('../models/employeesignup.js'); 
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    
    const user = await Signup.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

   
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

   
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
   
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
