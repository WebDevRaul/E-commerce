import React from 'react';
import PropTypes from 'prop-types';

// Scss
import './menu_item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div className='background-image'style={{ backgroundImage: `url(${imageUrl})`}}
    />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl:PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default MenuItem;