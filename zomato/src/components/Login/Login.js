import React,{useState} from 'react';
import google from '../Images/Googleicon.jpeg';
import email from '../Images/emailicon.jpeg';
import {Button, TextField, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Loginbg from '../Images/Login.mp4';
import usersdata from '../Data/usersData';
const Login = () => {
   const [emailValue, setEmailValue] = useState('');
    const [error, setError] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
    // Function to handle sign up (POST request)
const [users, setUsers] = useState(usersdata);

  const handleSignup = () => {
    setError('');
    const userExists = users.some(user => user.email === emailValue);

    if (userExists) {
      setError('Email already registered.');
    } else {
      const newUser = {
        id: Math.random().toString(16).slice(2),
        email: emailValue
      };
      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      setSuccess('Sign up successful! You can now log in.');
      setShowSignup(false);
      console.log('New user added:', newUser);
    }
  };


const handleSubmit = (event) => {
  event.preventDefault();
  setError('');
  const userFound = users.find(user => user.email === emailValue);

  if (userFound) {
    setSuccess('Login successful!');
    setShowSignup(false);
    navigate('/home'); // Redirect to home page
    console.log('User found:', emailValue);
  } else {
    setShowSignup(true);
    setError('Email not found. Please sign up.');
    console.log('User not found:', emailValue);
  }
};

    const handleChange = (event) => {
    setEmailValue(event.target.value);
  };
  return (
    <div style={{ position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',}}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
           position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        objectFit: 'cover',
        margin: 0,
        padding: 0,
        }}
      >
        <source src={Loginbg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{width:'50%',display:'flex',justifyContent:'center',alignItems:"center",marginLeft:"360px",flexDirection:"column",marginTop:"50px"}}>
        {/* <img src={image} alt="Login" style={{ width:'50%' }} /> */}
        {/* <br/> */}
        <Typography variant="h2" style={{ margin: '8px', color: 'white' ,fontStyle:'italic',fontSize:'60px',fontWeight:'bold'}}>Zomato</Typography>
         <Typography variant="h3" style={{ margin: '8px', color: 'white' }}>
            India's #1 food delivery app</Typography>
            <Typography style={{ margin: '10px', color: 'white' }}>
        __________________ Log in or sign up ___________________</Typography>
        <TextField
            label="Enter your email address" 
            style={{ margin: '10px', width: '400px',height: '10px',marginBottom:"50px" ,  background: 'none' }}
            type="email"
            placeholder='Enter your email address'
            InputProps={{
                style: { height: '45px',background:'none',color: '#000'}, 
            }}
            InputLabelProps={{
    style: { color: '#aaa' } // Ensures label color stands out
  }}
            value={emailValue}
            onChange={handleChange}
  
        />
          <Button style={{ backgroundColor: "red", color: "white", width: "400px" }} onClick={handleSubmit}>Continue</Button>
        {error && (
          <Typography color="error" style={{ margin: '10px' }}>
            {error}
          </Typography>
        )}
         {success && (
          <Typography style={{ margin: '10px', color: 'green' }}>
            {success}
          </Typography>
        )}
        {showSignup && (
          <Button style={{ backgroundColor: "green", color: "white", width: "400px", marginBottom: "10px" }} onClick={handleSignup}>
            Sign Up
          </Button>
        )}
       <Typography style={{ margin: '10px', color: 'black' }}>
       _________________________ or __________________________</Typography>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
  <img src={google} alt="Google Icon" style={{ width: '40px', height: '40px', marginRight: '60px',borderRadius: '50%',marginBottom:"5px"}} />
  <img src={email} alt="Email Icon" style={{ width: '40px', height: '40px', marginRight: '30px',borderRadius: '50%',marginBottom:"5px"}} />
</span>
<Typography style={{ margin: '10px', color: 'white' }}>
        By continuing, you agree to our terms of service privacy policy</Typography>
      </div>
    </div>
  );
};

export default Login;