import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from './collection_overview/Collection_Overview';
import Collection from './collection/Collection';

// Reselect
import { createStructuredSelector } from 'reselect';

// Redux
import { connect } from 'react-redux';
import { update_shop } from '../../redux/actions/shop';
import { select_isLoading, select_collection_isLoaded } from '../../redux/selectors/shop';
import Spinner from '../common/spinner/Spinner';

const SCollectionOverview = Spinner(CollectionOverview);
const SCollection = Spinner(Collection)

class Shop extends Component {
  componentDidMount() {
    this.props.update_shop();
  }

  render() {
    const { match, loading, isLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact path={`${match.path}`} 
          render={ props => <SCollectionOverview isLoading={loading} {...props} /> }
          />
        <Route 
          path={`${match.path}/:collection_id`} 
          render={ props => <SCollection isLoading={!isLoaded} {...props} /> } 
        />
      </div>
    )
  }
};

Shop.propTypes = {
  update_shop: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: select_isLoading,
  isLoaded: select_collection_isLoaded
});

export default connect(mapStateToProps, { update_shop })(Shop);