import React from 'react';
import PropTypes from 'prop-types';

// Component
import CustomButton from '../../common/button/Custom_button';

// Redux
import { connect } from 'react-redux';
import { add_item } from '../../../redux/actions/cart';

// Scss
import './collection_item.scss';

const CollectionItem = ({item, add_item }) => {
  const { name, price, imageUrl } = item;
  return(
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <div className='button-wrapper' onClick={() => add_item(item)}>
        <CustomButton value='Add to cart' isClass='inverted'/>
      </div>
    </div>
  )
};

CollectionItem.propTypes = {
  item: PropTypes.object.isRequired,
  add_item: PropTypes.func.isRequired
}

export default connect(null, { add_item })(CollectionItem);