// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../firebase.config';

// const SignupForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       if (!name || !email || !password || !confirmPassword) {
//         throw new Error('Please fill in all fields.');
//       }

//       if (password !== confirmPassword) {
//         throw new Error('Passwords do not match!');
//       }

//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log('Signup successful!', user);

//       setName('');
//       setEmail('');
//       setPassword('');
//       setConfirmPassword('');
//     } catch (error) {
//       console.error('Signup error:', error.message);
//       // Display error message to user - You may replace this with an error component in your UI
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="signup-form mt">
//       <h2>Signup</h2>
//       <form className='auth_from' onSubmit={handleSignup}>
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' required />
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your E-mail Id' required />
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Password' required />
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter Confirm Password' required />
//         <button type="submit" disabled={loading}>Signup</button>
//       </form>
//       <p>Already have an account? <Link to="/">Login here</Link></p>
//     </div>
//   );
// };

// export default SignupForm;



import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from '../firebase.config';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();
  const auth = getAuth();

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

      // Check if email is already registered
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      if (signInMethods.length > 0) {
        // User is already registered
        throw new Error('User is already registered. Please sign in.');
      }

      // Register new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signup successful!', user);

      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // Redirect to login page after successful signup
      history.push('/');
    } catch (error) {
      console.error('Signup error:', error.message);
      setError(error.message);
      // Show popup message for existing user
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Signup</h2>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <form className="auth_form" onSubmit={handleSignup} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <label className="login-label" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            placeholder="Enter Your Name"
            required
            style={{ width: '100%' }}
          />
          <label className="login-label" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="Enter Your E-mail Id"
            required
            style={{ width: '100%' }}
          />
          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Enter Your Password"
            required
            style={{ width: '100%' }}
          />
          <label className="login-label" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="login-input"
            placeholder="Enter Confirm Password"
            required
            style={{ width: '100%' }}
          />
          <button type="submit" className="login-button" disabled={loading} style={{ width: '100%' }}>Signup</button>
        </form>
        <p className="login-signup" style={{ textAlign: 'center', marginTop: '10px' }}>
          Already have an account? <Link to="/" className="login-link">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
