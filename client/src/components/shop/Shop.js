import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// Components
import ContainerOverview from './collection_overview/Container_Overview';
import ContainerCollection from './collection/Container_Collection';

// Redux
import { connect } from 'react-redux';
import { update_shop } from '../../redux/actions/shop';

const Shop = ({ update_shop, match }) => {

  useEffect(() => {
    update_shop()
  },[update_shop])

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={ContainerOverview} />
      <Route path={`${match.path}/:collection_id`} component={ContainerCollection} />
    </div>
  )
}

Shop.propTypes = {
  update_shop: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(null, { update_shop })(Shop);