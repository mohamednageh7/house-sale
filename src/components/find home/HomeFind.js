import React from 'react';
import LeftSecition from './left section/LeftSection';
import RightSection from './right section/RightSection';
import './style.scss';

const HomeFind = () => {
  return (
    <div className='container-fluid d-flex justify-content-between home-find'>
      <LeftSecition />
      <RightSection />
    </div>
  );
};

export default HomeFind;
