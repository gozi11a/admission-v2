import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../assets/contracts/bakalavr_kunduzgi.JPG';
import slide2 from '../../../assets/contracts/bakalavr_sirtqi.JPG';
import slide3 from '../../../assets/contracts/magistratura.JPG';
import slide4 from '../../../assets/contracts/111.jpg';
import './Carusel.scss';
import { Link } from "react-router-dom";

export const Carusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
       <Link to='/kuduzgi'>
       <img
          className="d-block"
          src={slide4}
          alt="First slide"
        />
       </Link>
        {/* <Carousel.Caption className='carousel-caption'>
          <h3>First slide label</h3>
          <p>Some representative placeholder content for the first slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
       <Link to="/sirtqi">
       <img
          className="d-block"
          src={slide2}
          alt="Second slide"
        />
       </Link>
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Some representative placeholder content for the second slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
       <Link to="/magister">
       <img
          className="d-block"
          src={slide3}
          alt="Third slide"
        />
       </Link>
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Some representative placeholder content for the third slide.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}
