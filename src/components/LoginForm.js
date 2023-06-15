import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const LoginForm = () => {
  const { isLoggedIn, login } = useContext(AuthContext);

  const handleLogin = () => {
    // Perform login logic, e.g., validate form inputs, make API requests

    // Call the login function to update the authentication state
    login();
  };

  return (
    <div>
      <h2>Login</h2>
      {isLoggedIn ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export  { LoginForm };


// import React, { useState } from "react";

// const LoginForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // You can store the form data in an array or perform any other desired action here
//     console.log(formData);
//     // Reset the form fields
//     setFormData({ username: "", password: "" });
//   };

//   const handleLoginChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       /* [name]: value, allows you to dynamically set the property name of an object based on the value of a variable. This dynamic property creation is useful when you want to update a specific field in the state object based on the input field being modified. https://chat.openai.com/share/85567aff-e5b9-43a2-b588-309f8a40166c */
//       [name]: value,
//     }));
//   };

//   // if existing user tries to sign up, prompt "already exist go log in"
//   // if nonexisting user tries to log in, prompt "to sign up"
  
  

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>
//           Username:
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleLoginChange}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleLoginChange}
//           />
//         </label>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export { LoginForm };