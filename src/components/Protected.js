import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Protected = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const handleLogout = () => {
    // Perform logout logic, e.g., clear session, make API requests

    // Call the logout function to update the authentication state
    logout();
  };

  return (
    <div>
      <h2>Protected Page</h2>
      {isLoggedIn ? (
        <div>
          <p>You are logged in!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You need to login or signup to access this page.</p>
      )}
    </div>
  );
};

export default Protected;

