import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    console.log('Login details:', email, password);

    // Redirect to home page after successful login
    history.push('/home');
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form mt">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your E-mail Id'
          required
        />
        <label htmlFor="password">Password:</label>
        <div className="password-container">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Your Password'
            required
          />
          <span className="password-toggle" onClick={handleShowPassword}>
            {showPassword ? <BiSolidHide /> : <BiSolidShow />}
          </span>
        </div>
        <button type='submit'>Login</button>
      </form>
      <p className='mt-10'>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};
export default Login;
