import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can store the form data in an array or perform any other desired action here
    console.log(formData);
    // Reset the form fields
    setFormData({ username: "", password: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      /* [name]: value, allows you to dynamically set the property name of an object based on the value of a variable. This dynamic property creation is useful when you want to update a specific field in the state object based on the input field being modified. https://chat.openai.com/share/85567aff-e5b9-43a2-b588-309f8a40166c */
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export { LoginForm };
