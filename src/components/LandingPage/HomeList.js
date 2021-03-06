import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { PlaceList, ListHeader } from './presentations';
import { placeListAction, placeAction } from '@/actions';

class HomeList extends React.Component {
  componentDidMount() {
    const { fetchRestaurants, fetchHotels } = this.props;
    fetchRestaurants();
    fetchHotels();
    console.log('mounted');
  }

  render() {
    const { restaurants, hotels } = this.props;
    return (
      <div>
        <p>Restaurants</p>
        <PlaceList PlaceList={restaurants} />
        <p>Lodging</p>
        <PlaceList PlaceList={hotels} />
      </div>
    );
  }
}
HomeList.propTypes = {
  fetchRestaurants: Proptypes.func,
  fetchHotels: Proptypes.func,
  restaurants: Proptypes.array,
  hotels: Proptypes.array,
};

const stateToProps = state => ({
  restaurants: state.hompageListsReducer.restaurants,
  hotels: state.hompageListsReducer.hotels,
});

const dispatchToProps = dispatch => ({
  fetchRestaurants: () => {
    dispatch(placeListAction.fetchRestaurants());
  },
  fetchHotels: () => {
    dispatch(placeListAction.fetchHotels());
  },
});

export default connect(
  stateToProps,
  dispatchToProps,
)(HomeList);
