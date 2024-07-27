import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide3 from '../../../assets/contracts/kontrakt_new_m.jpg';
import slide4 from '../../../assets/contracts/111.jpg';
import './Carusel.scss';
import { Link } from "react-router-dom";

export const Carusel = () => {
  return (
    <Carousel>
    
      <Carousel.Item>
       <Link to="/kunduzgi">
      <div className='img-wrapper'>
      <img
          className="d-block"
          src={slide4}
          alt="Second slide"
        />
      </div>
       </Link>  
      </Carousel.Item>
      <Carousel.Item>
       <Link to="/sirtqi">
      <div className='img-wrapper'>
      <img
          className="d-block"
          src={slide3}
          alt="Second slide"
        />
      </div>
       </Link>  
      </Carousel.Item>
    </Carousel>
  );
}
