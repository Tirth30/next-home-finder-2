// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase.config'; // Ensure correct import path

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const history = useHistory();

//   const signin = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;
//       console.log(user);
//       setLoading(false);
//       alert('Successfully logged in');
//       history.push('/home');
//     } catch (error) {
//       setLoading(false);
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="login-form mt">
//       <h2>Login</h2>
//       <form className="auth_from" onSubmit={signin}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder='Enter Your E-mail Id'
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder='Enter Your Password'
//           required
//         />
//         <button type="submit" disabled={loading}>Login</button>
//       </form>
//       <p className='mt-10'>
//         Don't have an account? <Link to="/signup">Sign Up</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;






import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config'; // Ensure correct import path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSignIn = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      alert('Successfully logged in');
      history.push('/home');
    } catch (error) {
      setLoading(false);
      alert('Please enter valid Username and Password ! ');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form className="auth_form" onSubmit={handleSignIn}>
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
          <button type="submit" className="login-button" disabled={loading}>Login</button>
        </form>
        <p className="login-signup">
          Don't have an account? <Link to="/signup" className="login-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
