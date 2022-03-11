import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../../assets/garrett-logo-white.png';

const Navigation = () => {
  return (
    <Navbar
      style={{ opacity: '0.9', position: 'sticky' }}
      className='mb-3'
      bg='dark'
      variant='dark'
      expand='lg'
      sticky='top'
    >
      <Container>
        <Navbar.Brand href='#root'>
          <h3>Home</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
            <Nav.Link
              target={'_blank'}
              href='https://drive.google.com/file/d/1UHfJiJkmsWWeJ8l0hkAcnO1uHrkwvmW5/view?usp=sharing'
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

// <nav className='nav'>
//   <div className='logo'>
//     <a href='#root'>
//       <img className='image' src={LOGO} alt='logo' />
//     </a>
//   </div>
//   <div className='links'>
//     <a className='link' href='#project-route'>
//       Projects
//     </a>
//     <a className='link' href='#contact-route'>
//       Contact
//     </a>
//     <a
//       rel='noreferrer'
//       className='link'
//       target='_blank'
//       href='https://docs.google.com/document/d/1ADNCLJr5hCvf4NtNEXDo-JHYDWS1jPOVcljPTAzCS8Q/edit?usp=sharing'
//     >
//       Resume
//     </a>
//   </div>
// </nav>
