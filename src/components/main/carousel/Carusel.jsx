import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide3 from '../../../assets/contracts/kontrakt_carousel.jpg';

import './Carusel.scss';


export const Carusel = () => {
  return (
    <Carousel>
    
      <Carousel.Item>
       
      <div className='img-wrapper'>
      <img
          className="d-block"
          src={slide3}
          alt="Second slide"
        />
      </div>
       
      </Carousel.Item>
      <Carousel.Item>
      
      <div className='img-wrapper'>
      <img
          className="d-block"
          src={slide3}
          alt="Second slide"
        />
      </div> 
      </Carousel.Item>
    </Carousel>
  );
}


