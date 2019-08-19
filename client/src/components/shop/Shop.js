import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from './collection_overview/Collection_Overview';
import Collection from './collection/Collection';

// Reselect
import { createStructuredSelector } from 'reselect';

// Firestore
import { firestore, convertItemsToObj } from '../../firebase/utils';

// Redux
import { connect } from 'react-redux';
import { update_shop } from '../../redux/actions/shop';
import { select_isLoading } from '../../redux/selectors/shop';
import Spinner from '../common/spinner/Spinner';

const SCollectionOverview = Spinner(CollectionOverview);
const SCollection = Spinner(Collection)

class Shop extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { update_shop } = this.props;
    const coll_Ref = firestore.collection('items');
    coll_Ref.onSnapshot(async snapshot => {
      const coll_Obj = convertItemsToObj(snapshot);
      update_shop(coll_Obj)
    })
  }

  render() {
    const { match, loading } = this.props;
    return (
      <div className='shop-page'>
        <Route 
          exact path={`${match.path}`} 
          render={ props => <SCollectionOverview isLoading={loading} {...props} /> }
          />
        <Route 
          path={`${match.path}/:collection_id`} 
          render={ props => <SCollection isLoading={loading} {...props} /> } 
        />
      </div>
    )
  }
};

Shop.propTypes = {
  update_shop: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: select_isLoading
});

export default connect(mapStateToProps, { update_shop })(Shop);