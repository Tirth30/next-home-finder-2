import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    // Implement your forgot password logic here (e.g., send reset password email)
    console.log('Forgot password for:', email);

    // Display success message
    setSuccessMessage(`Instructions to reset your password have been sent to ${email}. Please check your email.`);
    // Clear the email field
    setEmail('');
    // Clear any previous error messages
    setError('');
  };

  return (
    <div className="forgot-password-form mt">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
