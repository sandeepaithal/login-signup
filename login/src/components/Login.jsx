import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/employeelogin', { email, password })
      .then((res) => {
        console.log(res.data); 
        navigate('/employeehomepage');
        alert('Login successful');
      })
      .catch((err) => {
        console.log(err);
        alert('Invalid Credentials');
      });
  };

  return (
    <div className='Login'>
      <Form>
        <h1>Employee Login</h1>
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
          <Button variant="danger" className='mx-2'><Link to="/employeesignup">Sign Up</Link></Button>
          <Button variant="primary" className='mx-2'><Link to="/adminlogin">Admin</Link></Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
