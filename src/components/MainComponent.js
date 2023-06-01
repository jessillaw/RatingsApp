import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./HomePage";
import { Signup } from "./Signup";
import { LoginForm } from "./LoginForm";

function MainComponent() {
  // state updates and re-renders everytime app changes
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // when using object, must spread out prev state so it does not override the whole object

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [isSignup, setIssignup] = useState(false);
  const [isLogin, setIslogin] = useState(false);
  const [submit, setSubmit] = useState(0);

  // function version runs only the  first time your component renders

  function handleClick() {
    isLogin(true);
    // function version of resetting state
    // isLogin(prev => !prev);
  }

  // function handleClick() {
  //     isSignup(true);
  // }

  function handleFirstName(e) {
    person.firstName = e.target.value;
  }

  function handleEmail(e) {
    person.email = e.target.value;
  }

  function handlePassword(e) {
    user.password = e.target.value;
  }

  // function handleSubmit(e) {

  // }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/login"
        element={
          <LoginForm
            person={setPerson}
            user={setUser}
            isSignup={setIssignup}
            isLogin={setIslogin}
            handleFirstName={handleFirstName}
            handleEmail={handleEmail}
            handlePassword={handlePassword}
          />
        }
      />
    </Routes>
  );
}

export { MainComponent };
