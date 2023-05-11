import * as React from 'react';
// import { useState } from 'react';


const LoginForm = (props) => {

  // const [submit, setSubmit] = useState(0);

    const handleSubmit = (event) => {
      event.preventDefault();
    };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
      <input value={props.person.email} onChange ={props.handleEmail} id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input value={props.user.password} onChange={props.handlePassword}id="password" type="password" />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export { LoginForm };