import React from 'react';
import Proptypes from 'prop-types';

const MapP = ({ thePlace }) => (
  <div id='desc-container'>
    <h4 className='desc-item'>
      <div className='movie-title'>{thePlace.status}</div>
    </h4>
    <p className='desc-item'>
      <b className='desc-title'>Rating:</b>
      {thePlace.status}
    </p>
    <p className='desc-item'>
      <b className='desc-title'>Runtime:</b>
      {thePlace.status}
      minutes
    </p>
    <p className='desc-item'>
      <b className='desc-title'>Released date:</b>
      {thePlace.status}
    </p>
    <p id='overview' className='desc-item'>
      <b className='desc-title'>Overview:</b>
      {thePlace.status}
    </p>
  </div>
);

MapP.propTypes = {
  thePlace: Proptypes.object,
};

export default MapP;
