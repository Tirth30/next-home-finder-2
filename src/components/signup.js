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
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!name || !email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields.');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match!');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signup successful!', user);

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setSignupSuccess(true);
      history.push('/'); // Redirect to login page after successful signup
    } catch (error) {
      console.error('Signup error:', error.message);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Signup</h2>
        <form className="auth_form" onSubmit={handleSignup}>
          <label className="login-label" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            placeholder='Enter Your Name'
            required
          />
          <label className="login-label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder='Enter Your E-mail Id'
            required
          />
          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder='Enter Your Password'
            required
          />
          <label className="login-label" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="login-input"
            placeholder='Enter Confirm Password'
            required
          />
          <button type="submit" className="login-button" disabled={loading}>Signup</button>
          {signupSuccess && <p className="signup-success-message">Signup successful! Redirecting to login...</p>}
          {error && <p className="error-message">{error}</p>}
        </form>
        <p className="login-signup">
          Already have an account? <Link to="/" className="login-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;