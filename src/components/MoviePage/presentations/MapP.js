import React from 'react';
import Proptypes from 'prop-types';

const MapP = ({ mapPath }) => (
  <div id="poster-container">
    <img id="poster" src={mapPath} />
  </div>
);

MapP.propTypes = {
  mapPath: Proptypes.string,
};

export default MapP;
