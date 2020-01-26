import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.renderDesc = this.renderDesc.bind(this);
    this.renderPic = this.renderPic.bind(this);
  }

  renderTitle = (title) => {
    if (title.length < 20) {
      return <h5 className='search-tile-title'>{title}</h5>;
    }
    if (title.length < 35) {
      return <h5 className='search-tile-title long-title'>{title}</h5>;
    }
    return <h5 className='search-tile-title longer-title'>{title}</h5>;
  };

  renderDesc = (desc) => {
    if (desc.length > 150) {
      // eslint-disable-next-line no-param-reassign
      desc = desc.substring(0, 135);
      return <p className='tile-desc'>{desc} ... read more</p>;
    }
    return <p className='tile-desc'>{desc}</p>;
  };

  renderPic = (photos) => {
    if (photos[0].photo_reference !== null) {
      return (
        <img
          className='tile-img'
          alt='img'
          src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[0].photo_reference}&sensor=false&key=AIzaSyAWKIPESodPq93nv0k7g7MsN9MzBaUxCzU`}
        />
      );
    }
    return (
      <img
        alt='img'
        className='tile-img'
        src='http://via.placeholder.com/280x160'
      />
    );
  };

  render() {
    const { place } = this.props;
    return (
      <Link className='tile' to={`/place/${place.place_id}`}>
        <div className='tile-img'>{this.renderPic(place)}</div>
        <div className=' photo-overlay'>
          <div className='tile-text-container'>
            <div className='playbtn-container'>
              <button className='playBtn '>🔍</button>
            </div>
            <div>{this.renderTitle(place.name)}</div>
          </div>
        </div>
      </Link>
    );
  }
}

// <div>{this.renderDesc(movie.overview)}</div> # add to line 63 after renderTitle

ListItem.propTypes = {
  place: Proptypes.object,
};
export default ListItem;
