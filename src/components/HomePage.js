import React from "react";
import { Link } from "react-router-dom";

function HomePage () { 


    return (
        <div className="home-container">
            <ul>
                <li>
                    <Link to='/Signup'> Sign up!</Link>
                </li>
                <li>
                    <Link to='/Login'>Login</Link>
                </li>
            </ul>
        </div>
        
    )
};

export { HomePage };

{/* <LoginForm person={person.firstName} user={user.password} onClick={handleEmailChange}/> */}

{/* color='secondary'value='sign-up'
<button className ='btn1'>
sign-up
</button>
 <button className ='btn2'> color='primary' value='login'
login
</button> */}
