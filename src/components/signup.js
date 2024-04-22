
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Import useHistory hook

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!name || !email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields.');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match!');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert('Signup successful!');

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
      // Redirect to login page after successful signup
      history.push("/"); // Redirect to your login page route
    } catch (error) {
      console.error('Signup error:', error.message);
      // Display error message to user using alert
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="signup-form mt">
      <h2>Signup</h2>
      <form className='auth_from' onSubmit={handleSignup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-mail Id' required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter Confirm Password' required />
        <button type="submit" disabled={loading}>Signup</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default SignupForm;
