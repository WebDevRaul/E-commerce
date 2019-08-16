import React from 'react';
import PropTypes from 'prop-types';

// Components
import CollectionPreview from './collection_preview/Collection_Preview';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { select_shop } from '../../redux/selectors/shop';

const Shop = ({ shop }) => (
  <div className='shop-page'>
    {
      shop.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />)
    }
  </div>
)

Shop.propTypes = {
  shop: PropTypes.array.isRequired
};

const mapStateToProps = createStructuredSelector({
  shop: select_shop
});

export default connect( mapStateToProps, null )(Shop);