import React, { useState } from 'react';
import './Email/Email.css';

const EmailForm = () => {

  const [email, setEmail] = useState("");

  const handleChange = (e) => {
      setEmail(e.target.value.trim());
      console.log(email);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
  }
  
  return (
    <div className='center-container'>
      <h1>Sign Up for our Mailing List</h1>
      
      <div className='center-container'>  
        <form className="subscribe" onSubmit={handleSubmit}>
          <input className="subscribe-email" name="email" type="email" value={email} placeholder='Ex: yourname@mycompany.com' onChange={handleChange}/>
          <button className="subscribe-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default EmailForm;