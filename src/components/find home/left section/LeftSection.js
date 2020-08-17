import React from 'react';
import home from './small home.png';
const LeftSection = () => {
  return (
    <div className='mt-5 ml-5 left-side'>
      <div className='text mb-5'>
        <h1 className='font-weight-bold'>
          Looking for a home ? <br /> Your are in the right place
        </h1>
      </div>
      <div className='form-inputs'>
        <form>
          <div className='form-row'>
            <div className='col-12  form-group mb-4'>
              <input
                type='text'
                className='form-control'
                placeholder='What is your name?'
              />
            </div>
            <div className='col-12 form-group mb-4'>
              <input
                type='text'
                className='form-control'
                placeholder='What is your email?'
              />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 form-group mb-4'>
              <select id='inputState' className='form-control'>
                <option value>How many bedrooms ?</option>
                <option>...</option>
              </select>
              <i className='fas fa-chevron-down'></i>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 form-group mb-4'>
              <select id='inputState' className='form-control'>
                <option value>How many bathrooms?</option>
                <option>...</option>
              </select>
              <i className='fas fa-chevron-down'></i>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 form-group mb-4'>
              <input
                type='text'
                className='form-control'
                placeholder='Create password'
              />
            </div>
            <div className='text-center font-weight-bold mb-4 d-sm-none'>
              <h3>Choose your style.</h3>
              <img src={home} alt='home' className='mobile-home' />
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 form-group mb-4'>
              <button
                type='button'
                className='btn btn-primary btn-lg btn-block button-color'
              >
                Find your home
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftSection;
