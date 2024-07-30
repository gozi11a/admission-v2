import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forms from './forms/Forms';
import Location from './location/Location';
import { Bachelors } from '../admissions/bachelors/Bachelors';
import { Masters } from '../admissions/masters/Masters'; 
import Swipers from './carousel/Swipers';


const Home = () => {
  return (
    <>
      <Forms />
   
    <Swipers/>

      <Location />
    </>
  );
};

const Asosiy = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bachelors" element={<Bachelors />} />
      <Route path="/masters" element={<Masters />} />
     
    </Routes>
  );
};

export default Asosiy;
