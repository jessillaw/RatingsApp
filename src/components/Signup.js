import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Signup = () => {
  const { isLoggedIn, signup } = useContext(AuthContext);

  const handleSignup = () => {
    // Perform signup logic, e.g., validate form inputs, make API requests

    // Call the signup function to update the authentication state
    signup();
  };

  return (
    <div>
      <h2>Signup</h2>
      {isLoggedIn ? (
        <p>You are already signed up!</p>
      ) : (
        <button onClick={handleSignup}>Signup</button>
      )}
    </div>
  );
};

export  { Signup };





// import React, { useState } from 'react';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const [registeredEmails, setRegisteredEmails] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const userExists = registeredEmails.includes(formData.email && formData.firstName && formData.lastName);

//     if (userExists) {
//       setError('User already exists! Please choose a different email.');
//     } else {
//       setError('');
//       console.log(formData); // You can replace this with your desired action (e.g., sending the data to a server)
//       setRegisteredEmails([...registeredEmails, formData.email]);
//       setFormData({ firstName: '', lastName: '', email: '', password: '' }); // Reset form fields
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//       </div>
//       {error && <p>{error}</p>}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export  {Signup};
