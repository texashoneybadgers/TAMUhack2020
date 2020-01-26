import React from 'react';
import Proptypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import ListItem from './ListItem';

class PlaceList extends React.Component {
  state = {
    margin: 0,
  };

  renderPlaceList = placeList => placeList.map(place => <ListItem
   key={place.place_id} place={place} />);

  handleLeftClick = (e) => {
    e.preventDefault();
    if (this.state.margin < 350) {
      this.setState({
        margin: this.state.margin + 350,
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: '+=350px',
        },
        'fast',
      );
    }
  };

  handleRightClick = (e) => {
    e.preventDefault();
    if (this.state.margin > -4200) {
      this.setState({
        margin: this.state.margin - 350,
      });
      // eslint-disable-next-line
      const el = findDOMNode(this.refs.content);
      $(el).animate(
        {
          marginLeft: '-=350px',
        },
        'fast',
      );
    }
  };

  render() {
    const { placeList } = this.props;
    return (
      <div className='list-container'>
        <span
          onClick={this.handleLeftClick}
          className='left-controls'
          role='button'
        />

        <div className='module-section clearfix'>
          {/* eslint-disable-next-line react/no-string-refs */}
          <ul id='content' ref='content'>
            {/* <div className='listRow'>{this.renderPlaceList(placeList)}</div> */}
          </ul>
        </div>

        <span
          onClick={this.handleRightClick}
          className='right-controls'
          role='button'
        />
      </div>
    );
  }
}

PlaceList.propTypes = {
  placeList: Proptypes.array,
};
export default PlaceList;
