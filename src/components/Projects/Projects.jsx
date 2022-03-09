import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function Projects() {
  return (
    <div
      style={{
        display: 'flex',
        border: '2px solid red',
        justifyContent: 'space-around',
        width: '70%',
        margin: '3px auto',
      }}
      className='projects-container'
    >
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>g'Jam App</Card.Title>
          <Card.Text style={{ fontSize: '10px' }}>
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
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src='holder.js/100px180?text=Image cap' />
        <Card.Body>
          <Card.Title>Muay Thai Guy</Card.Title>
          <Card.Text style={{ fontSize: '10px' }}>
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
          <Card.Link href='#'>Card Link</Card.Link>
          <Card.Link href='#'>Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Projects;
