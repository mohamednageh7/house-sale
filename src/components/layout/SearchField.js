import React, { Fragment } from 'react';

const SearchField = () => {
  return (
    <Fragment>
      <form className='form-inline my-2 my-lg-0'>
        <input
          className='form-control mr-sm-2'
          type='search'
          placeholder='Quick Search'
          aria-label='Search'
        />
        <i className='fas fa-search'></i>
      </form>
    </Fragment>
  );
};

export default SearchField;
