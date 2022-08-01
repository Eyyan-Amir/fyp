import React from 'react'

export default function SignUp() {

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log('Form Submited')
  }

  return (
    <div className='signUp'>
      <div className="row">
        <div className="col-6">Left Side</div>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type='text' id='firstName' placeholder='First Name'/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Last Name</label>
              <input type='text' id='lastName' placeholder='Last Name'/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Email</label>
              <input type='email' id='email' placeholder='Email'/>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Password</label>
              <input type='password' id='firstName' placeholder='password'/>
            </div>
            <div className="form-group">
            <select className="form-select">
              <option value="0">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type='submit'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
