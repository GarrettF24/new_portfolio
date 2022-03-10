import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AboutMe() {
  return (
    <div style={{ width: '70%', margin: ' 1rem auto' }} className='about-me-container'>
      <Accordion defaultActiveKey='0' flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>Everything dev related</Accordion.Header>
          <Accordion.Body>
            I started my developer journey shortly after covid began, I had always been
            looking for something to keep me more engaged and mentally stimulated. After
            the first few months of the pandemic, I started teaching myself HTML, CSS, and
            JavaScript. I enjoyed it so much I decided I wanted to make a career out of it
            and looked for a place to learn. I settled on General Assembly and completed
            the Software Engineering Immersive in October. My passion for development has
            only grown and the sheer amount of knowledge that can be acquired in this
            field is so exciting! I am always looking for hackathons and have taken on
            some freelance work as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>Personal</Accordion.Header>
          <Accordion.Body>
            Outside of learning data structures, solving algorithms, and developing apps I
            have a few things I really enjoy. I love reading, my favorite genre is fantasy
            but I read all sorts of books and I am always open to recommendations. My
            favorite hobby is Muay Thai, I have been training for five years and it is one
            of my goals to go train in Thailand with the real nak muays. Hiking in the
            White Mountains and being in nature is my favorite way to reset. I always have
            a great time when I am with friends and family so I put in an effort to see
            them as much as possible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AboutMe;
