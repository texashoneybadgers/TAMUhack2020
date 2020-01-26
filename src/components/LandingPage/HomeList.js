import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { MovieList, ListHeader } from './presentations';
import { placeListAction, placeAction } from '@/actions';

class HomeList extends React.Component {
  componentDidMount() {
    const { fetchPopular, fetchTopRated, fetchUpcoming } = this.props;
    fetchUpcoming();
    fetchPopular();
    fetchTopRated();
  }

  render() {
    const { upcoming, topRated, popular } = this.props;
    return (
      <div>
        <ListHeader header='Up Coming' />
        <MovieList movieList={upcoming} />
        <ListHeader header='Popular' />
        <MovieList movieList={popular} />
        <ListHeader header='Top Rated' />
        <MovieList movieList={topRated} />
      </div>
    );
  }
}
HomeList.propTypes = {
  fetchUpcoming: Proptypes.func,
  fetchPopular: Proptypes.func,
  fetchTopRated: Proptypes.func,
  upcoming: Proptypes.array,
  topRated: Proptypes.array,
  popular: Proptypes.array,
};

const stateToProps = state => ({
  upcoming: state.hompageListsReducer.upcoming,
  topRated: state.hompageListsReducer.topRated,
  popular: state.hompageListsReducer.popular,
});

const dispatchToProps = dispatch => ({
  fetchUpcoming: () => {
    dispatch(placeListAction.fetchUpcoming());
  },
  fetchPopular: () => {
    dispatch(placeListAction.fetchPopular());
  },
  fetchTopRated: () => {
    dispatch(placeListAction.fetchTopRated());
  },
});

export default connect(
  stateToProps,
  dispatchToProps,
)(HomeList);
