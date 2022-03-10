import React from 'react';

import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
    <div style={{ marginBottom: '40px' }} className='contact-container'>
      <div className='contact-title'>
        <h3>Email or connect with me on LinkedIn!</h3>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '60%',
          margin: 'auto',
        }}
        className='professional-links'
      >
        <div className='linked-in-link'>
          <a
            className='links-to-pages'
            target='_blank'
            href='https://www.linkedin.com/in/garrettfoster24/'
            rel='noreferrer'
          >
            <FiLinkedin style={{ fontSize: '3rem' }} />
          </a>
        </div>
        <div className='github-link'>
          <a
            className='links-to-pages'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/GarrettF24'
          >
            <FiGithub style={{ fontSize: '3rem' }} />
          </a>
        </div>
      </div>
      <div
        style={{
          // border: '1px solid red',
          display: 'flex',
          width: '70%',
          justifyContent: 'center',
          margin: 'auto',
        }}
        className='contact-form'
      >
        <Form
          style={{ width: '100%', boxShadow: '0px 5px 6px 1px', background: 'white' }}
          onSubmit={handleOnSubmit}
        >
          <Form.Group className='mt-3 mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Control
              style={{ width: '70%', margin: 'auto' }}
              type='email'
              name='from_email'
              placeholder='Email'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Control
              style={{ width: '70%', margin: 'auto' }}
              label='Name'
              name='from_name'
              placeholder='Name'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              style={{ width: '95%', margin: 'auto' }}
              name='message'
              placeholder='Message…'
              required
              as='textarea'
              rows={3}
            />
          </Form.Group>
          <Button className='mb-2' type='submit' variant='outline-success'>
            Send
          </Button>{' '}
        </Form>
      </div>
    </div>
  );
}

{
  /* <form onSubmit={handleOnSubmit}>
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
</form> */
}
