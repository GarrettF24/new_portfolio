import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
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
