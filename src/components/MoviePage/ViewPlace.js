import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MapP, Descriptions } from './presentations';
import { placeAction } from '@/actions';

class ViewPlace extends React.Component {
  componentDidMount() {
    const {
      fetchThePlace,
      match: {
        params: { place_id },
      },
    } = this.props;
    fetchThePlace(place_id);
  }

  componentWillUnmount() {
    const { clearThePlace } = this.props;
    clearThePlace();
  }

  render() {
    const { thePlace } = this.props;
    console.log('dajfiosdf');
    console.log(JSON.stringify(this.props.thePlace.result));
    return (
      <div id='moviePage-container'>
        <MapP
          // mapPath={''}
        />
        <Descriptions thePlace={thePlace} />
      </div>
    );
  }
}

ViewPlace.propTypes = {
  thePlace: Proptypes.object,
  fetchThePlace: Proptypes.func,
};

const stateToProps = state => ({
  thePlace: state.thePlaceReducer.thePlace,
});

const dispatchToProps = dispatch => ({
  fetchThePlace: (place_id) => {
    dispatch(placeAction.fetchThePlace(place_id));
  },
  clearThePlace: () => dispatch(placeAction.clearThePlace()),
});

export default withRouter(
  connect(
    stateToProps,
    dispatchToProps,
  )(ViewPlace),
);
