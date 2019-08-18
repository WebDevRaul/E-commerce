import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from './collection_overview/Collection_Overview';
import Collection from './collection/Collection';

// Firestore
import { firestore, convertItemsToObj } from '../../firebase/utils';

// Redux
import { connect } from 'react-redux';
import { update_shop } from '../../redux/actions/shop';

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
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collection_id`} component={Collection} />
      </div>
    )
  }
};

Shop.propTypes = {
  update_shop: PropTypes.func.isRequired
}

export default connect(null, { update_shop })(Shop);