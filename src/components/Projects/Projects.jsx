import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import GJAM from '../../assets/gjam.png';
import MuayThaiPicture from '../../assets/muay-thai-guy.png';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';
function Projects() {
  return (
    <div className='projects-container'>
      <Card id='card' className='m-3' style={{ width: '100%' }}>
        <Card.Img variant='top' src={GJAM} />
        <Card.Body>
          <Card.Title>g'Jam App</Card.Title>
          <Card.Text style={{ fontSize: '16px' }}>
            eCommerce app will full CRUD, authorization, and authentication. When logged
            in users can create their own jams
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
          <Card.Link target={'_blank'} href='https://gjam-app.netlify.app/'>
            Website
          </Card.Link>
        </Card.Body>
      </Card>
      <Card id='card' className='m-3' style={{ width: '100%' }}>
        <Card.Img variant='top' src={MuayThaiPicture} />
        <Card.Body>
          <Card.Title>Muay Thai Guy</Card.Title>
          <Card.Text style={{ fontSize: '16px' }}>
            A full CRUD app with authorization and authentication that is part blog and
            part product review.
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
