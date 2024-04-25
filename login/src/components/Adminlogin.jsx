import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap components
import '../Styles/AdminLogin.css';

const Adminlogin = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5001/login', { email, password })
        .then((res) => {
          console.log(res.data); // assuming response contains necessary data
          navigate('/Adminhomepage');
          alert('Login successful');
        })
        .catch((err) => {
          console.log(err);
          alert('Invalid Credentials');
        });
    };
  
    return (
      <div className='AdminLogin'>
        <Form>
          <h1>Admin Login</h1>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Button onClick={handleSubmit} variant="success" className='mx-2'>Login</Button>
            <Button variant="danger" className='mx-2'><Link to="/adminsignup">Sign Up</Link></Button>
            <Button variant="primary" className='mx-2'><Link to="/">Employee</Link></Button>
          </Form.Group>
        </Form>
      </div>
    );
};

export default Adminlogin;
