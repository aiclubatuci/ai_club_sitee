import React, { useState, useEffect } from 'react';
import './Email/Email.css'; 
import jsonp from 'jsonp';

const EmailForm = () => {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Add Mailchimp CSS
    const link = document.createElement('link');
    link.href = '//cdn-images.mailchimp.com/embedcode/classic-061523.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    document.head.appendChild(link);

    // Add inline styles
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '#mc_embed_signup { background: #fff; clear: left; font: 14px Helvetica, Arial, sans-serif; width: 600px; }';
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  // Simple JSONP implementation
  const jsonp = (url, options, callback) => {
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    
    window[callbackName] = function(data) {
      callback(null, data);
      document.body.removeChild(script);
      delete window[callbackName];
    };
    
    const script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + options.param + '=' + callbackName;
    
    script.onerror = function() {
      callback(new Error('JSONP request failed'));
      document.body.removeChild(script);
      delete window[callbackName];
    };
    
    document.body.appendChild(script);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    setSuccessMessage('');
    
    const url = `https://uci.us17.list-manage.com/subscribe/post-json?u=${process.env.U_ID}&id=${process.env.ID}`;
    
    jsonp(`${url}&EMAIL=${encodeURIComponent(email)}`, { param: 'c' }, (error, data) => {
      if (error) {
        console.log(error);
        console.log(email);
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
        return;
      }
      else {
          if (data && typeof data === 'object') {
            const { msg = 'Thank you for subscribing!', result = 'success' } = data;
            setStatus(result);
            setSuccessMessage(msg);
            return;
          } else {
            setStatus('error');
            setErrorMessage('Unexpected response format. Please try again.');
            return;
          }
      }
  
    });
  };

  return (
    <div id="mc_embed_shell" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <div id="mc_embed_signup" style={{
        background: '#fff',
        clear: 'left',
        font: '14px Helvetica, Arial, sans-serif',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div id="mc_embed_signup_scroll">

          <h2 style={{ textTransform: 'none', 
                       marginBottom: '1rem', 
                       fontSize: '1.875rem', 
                       lineHeight: '2.25rem',
                       textAlign: 'center'
            }}>
              Subscribe to our mailing list!
          </h2>
          
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email <span className="asterisk">*</span>
            </label>
            <input 
              type="email" 
              name="EMAIL" 
              className="required email" 
              id="mce-EMAIL" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <div className="min-h-[75px] flex justify-center items-center">
              
              {successMessage && <p style={{ color: '#10b981' }}>{successMessage}</p>} 
              {errorMessage && <p style={{ color: '#ef4444' }}>{errorMessage}</p>}
    
          </div>
          
          <div id="mce-responses" className="clear foot">
            <div 
              className="response" 
              id="mce-error-response" 
              style={{ display: 'none' }}
            ></div>
            <div 
              className="response" 
              id="mce-success-response" 
              style={{ display: 'none' }}
            ></div>
          </div>
          
          <div 
            aria-hidden="true" 
            style={{ position: 'absolute', left: '-5000px' }}
          >
            {/* Anti-bot field */}
            <input 
              type="text" 
              name="b_2426b2c29a519a8ab1f091ad8_69d377d7a5" 
              tabIndex="-1" 
              defaultValue=""
            />
          </div>
          
          <div className="optionalParent">
            <div className="clear foot">
              <button 
                type="button"
                onClick={handleSubmit}
                className="button" 
                id="mc-embedded-subscribe"
                disabled={!email}
                style={{
                  backgroundColor: '#007cba',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: email ? 'pointer' : 'not-allowed',
                  opacity: email ? 1 : 0.6,
                  fontSize: '14px',
                  fontWeight: 'normal',
                  lineHeight: '1.4',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                Subscribe 
              </button>

              <p style={{ margin: '0px auto', marginTop: '10px' }}>
                <a 
                  href="http://eepurl.com/i0cu9A" 
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <span 
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'transparent',
                      borderRadius: '4px'
                    }}
                  >
                    <img 
                      className="referral_badge" 
                      src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" 
                      alt="Intuit Mailchimp" 
                      style={{
                        width: '220px',
                        height: '40px',
                        display: 'flex',
                        padding: '2px 0px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    />
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailForm;

