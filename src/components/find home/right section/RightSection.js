import React from 'react';
import home from './homes.png';
const RightSection = () => {
  return (
    <div className='right-text'>
      <div className='text'>
        <h1 className='font-weight-bold'>Choose your style</h1>
      </div>
      <div className='d-flex d-flex justify-content-around mt-5'>
        <span>Ranch</span>
        <span>Traditional</span>
        <span>Modern</span>
      </div>
      <img src={home} alt='home' />
    </div>
  );
};

export default RightSection;
