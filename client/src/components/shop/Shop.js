import React from 'react';
import { Route } from 'react-router-dom';

// Components
import CollectionOverview from './collection_overview/Collection_Overview';
import Collection from './collection/Collection';


const Shop = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collection_id`} component={Collection} />
  </div>
);

export default Shop;