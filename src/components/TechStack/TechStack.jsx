import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import MERN from '../../assets/mern-stack.jpeg';
import BASICS from '../../assets/html-css-js.png';
import RUBY from '../../assets/ruby-on-rails.webp';
import './TechStack.css';
function TechStack() {
  return (
    <div className='carousel-container'>
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100' src={MERN} alt='First slide' />
          <Carousel.Caption>
            <p>The main stack I work with.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={BASICS} alt='Second slide' />

          <Carousel.Caption>
            <p>How my coding journey started, and still use on a daily basis</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={RUBY} alt='Third slide' />

          <Carousel.Caption>
            <p>
              I am not as well versed in rails as mern, but have had some exposure to it.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TechStack;
