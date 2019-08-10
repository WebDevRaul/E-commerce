import React from 'react';

// Component
import CustomButton from '../../common/button/Custom_button';


// Scss
import './collection_item.scss';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className='collection-item'>
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton value='Add to cart' type='button' isClass='inverted' />
  </div>
);

export default CollectionItem;