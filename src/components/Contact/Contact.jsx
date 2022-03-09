import React from 'react';
import { Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
// import './Contact.css';

const SERVICE_ID = 'service_bbtqu7c';
const TEMPLATE_ID = 'template_87gxjuy';
const USER_ID = 'user_apGuPMUeZgOhRFYShPD9Q';

export default function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <div className='contact-container'>
      <div className='contact-title'>
        <h1>Email or connect with me on LinkedIn!</h1>
      </div>
      <div className='professional-links'>
        <div className='linked-in-link'>
          <a
            className='links-to-pages'
            target='_blank'
            href='https://www.linkedin.com/in/garrettfoster24/'
            rel='noreferrer'
          >
            <FiLinkedin />
          </a>
        </div>
        <div className='github-link'>
          <a
            className='links-to-pages'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/GarrettF24'
          >
            <FiGithub />
          </a>
        </div>
      </div>
      <div className='contact-form'>
        <form onSubmit={handleOnSubmit}>
          <input
            className='email-info'
            id='form-input-control-email'
            // control={Input}
            label='Email'
            name='from_email'
            placeholder='Email…'
            required
            icon='mail'
            // iconPosition="left"
          />
          <input
            className='email-info'
            id='form-input-control-last-name'
            // control={Input}
            label='Name'
            name='from_name'
            placeholder='Name…'
            required
            icon='user circle'
            // iconPosition="left"
          />
          <textarea
            className='email-info'
            id='form-textarea-control-opinion'
            // control={TextArea}
            label='Message'
            name='message'
            placeholder='Message…'
            required
          />
          <Button type='submit' color='green'>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
