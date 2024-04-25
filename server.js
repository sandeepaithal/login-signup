const express = require('express');
const mongoose = require('mongoose');
const signuprouter=require('./routes/signuproute.js')
const loginrouter=require('./routes/loginroute.js')
const employeesignuprouter=require('./routes/employeesignup.js')
const employeelogin=require('./routes/employeelogin.js')
const cors = require('cors');
const app = express();
app.use(cors()); 

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/employeesignup',employeesignuprouter)
app.use('/employeelogin',employeelogin)

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
