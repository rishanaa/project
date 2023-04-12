import React from 'react'

function Login() {
  return (
    <div>
        <div>
      <h1>Sign In</h1>
      <h5>New user? <button>Create an account</button></h5>
      <input type="text" 
             placeholder='Username or email'/><br/>
       <input type="password" 
              placeholder='Password'/><br/>
      <input type="checkbox" className='check'/>
      <label htmlFor="check">Keep me signed in</label><br/>
      <button>Sign In</button>
      <h5>Or Sign In With</h5>
      </div>
    </div>
  );
};

export default Login
