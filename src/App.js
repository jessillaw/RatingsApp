import './App.css';
import React from 'react';
import { AuthProvider } from './components/AuthContext';
import { LoginForm } from './components/LoginForm';
import { Signup } from './components/Signup';
import Protected from './components/Protected';
import { MainComponent } from './components/MainComponent';

const App = () => {
  return (
    <>
    <div>
      <h1>Welcome to My App</h1>
      <AuthProvider>
        <LoginForm />
        <Signup />
        <Protected />
      </AuthProvider>
      <MainComponent />
      </div>
      </>
    );
};

export default App;


// import React from 'react';
// import { AuthProvider } from './AuthContext';
// import Login from './Login';
// import Signup from './Signup';
// import Protected from './Protected';

// const App = () => {
//   return (
//     <div>
//       <h1>Welcome to My App</h1>
//       <AuthProvider>
//         <Login />
//         <Signup />
//         <Protected />
//       </AuthProvider>
//     </div>
//      );
//      };


{/* 
import './App.css';
import React from 'react';
import { MainComponent } from './components/MainComponent';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainComponent />
      </header>
    </div>
  );
};    

export default App; */}


  