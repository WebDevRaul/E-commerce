import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from './collection_overview/Collection_Overview';
import Collection from './collection/Collection';

// Firestore
import { firestore, convertItemsToMap } from '../../firebase/utils';

class Shop extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const coll_Ref = firestore.collection('items');
    coll_Ref.onSnapshot(async snapshot => {
      convertItemsToMap(snapshot)
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

export default Shop;