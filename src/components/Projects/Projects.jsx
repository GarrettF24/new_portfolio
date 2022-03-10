import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import GJAM from '../../assets/gjam.png';
import MuayThaiPicture from '../../assets/muay-thai-guy.png';
import { FiGithub } from 'react-icons/fi';

function Projects() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '60%',
        margin: '25px auto',
        overflow: 'hidden',
        alignItems: 'center',
        boxShadow: '0px 5px 6px 1px',
        background: 'white',
      }}
      className='projects-container'
    >
      <Card id='card' className='m-3' style={{ width: '100%' }}>
        <Card.Img variant='top' src={GJAM} />
        <Card.Body>
          <Card.Title>g'Jam App</Card.Title>
          <Card.Text style={{ fontSize: '16px' }}>
            This is an eCommerce jam store that lets users log in with the option to view,
            create, and edit jams. Jams are stored in a database so that users can see
            jams they created and jams created by other users. If a user is not signed in,
            they will not be able to edit or create a jam. A shopping cart is available to
            logged in users so they can add and remove jams.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>MERN Stack</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            style={{ fontSize: '20px' }}
            target={'_blank'}
            href='https://github.com/GarrettF24/gjam-app'
          >
            {' '}
            <FiGithub />
          </Card.Link>
          <Card.Link href='https://gjam-app.netlify.app/'>Website</Card.Link>
        </Card.Body>
      </Card>

      <Card id='card' className='m-3' style={{ width: '100%' }}>
        <Card.Img variant='top' src={MuayThaiPicture} />
        <Card.Body>
          <Card.Title>Muay Thai Guy</Card.Title>
          <Card.Text style={{ fontSize: '16px' }}>
            Muay-thai-guy is a product review and blog app all rolled into one. This app
            combines my long love of muay thai with my new and growing love of
            programming. All opinions and reviews will be based off my 5 years of
            expierence in Muay Thai.
          </Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>
          <ListGroupItem>React Frontend</ListGroupItem>
          <ListGroupItem>Ruby on Rails Backend</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link
            style={{ fontSize: '20px' }}
            target={'_blank'}
            href='https://github.com/GarrettF24/muay-thai-guy'
          >
            <FiGithub />
          </Card.Link>
          <Card.Link target={'_blank'} href='https://muay-thai-guy.netlify.app/'>
            Website
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Projects;
