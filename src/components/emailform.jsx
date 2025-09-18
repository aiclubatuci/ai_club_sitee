import React, { useState } from 'react';
import './Email/Email.css';
import { addSubscriber } from '../backend/server.js';

const EmailForm = () => {

  const [email, setEmail] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState("");
  const [subscribeError, setSubscribeError] = useState("");

  const handleChange = (e) => {
      setEmail(e.target.value.trim());
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      setSubscribeSuccess("");
      setSubscribeError("");

      if (email === "") {
          setSubscribeError("You must fill out the email field to sign up for our mailing list!");
          return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const res = await response.json();

        if (res.errorMessage) {
            setSubscribeError(res.errorMessage);
            return;
        }

        if (res.successMessage) {
            setSubscribeSuccess(res.successMessage);
            setEmail("");
            return;
        }
    } catch (error) {
        setSubscribeError("Network error. Please try again.");
    }
  }
  
  return (
    <div className='center-container'>
      <h1>Sign Up for our Mailing List</h1>
      
      <div className='center-container'>  
        <form className="subscribe" onSubmit={(e) => handleSubmit(e)}>
          <input className="subscribe-email" type="email" name="email" value={email} placeholder='Ex: yourname@mycompany.com' onChange={handleChange}/>
          <button className="subscribe-button" type="submit">Sign Up</button>
        </form>
        <div className="min-h-[75px] flex justify-center items-center">
            {subscribeSuccess && <p className="text-green-500">{subscribeSuccess}</p>} 
            {subscribeError && <p className="text-red-500">{subscribeError}</p>}
        </div>
      </div>
    </div>
  )
}

export default EmailForm;