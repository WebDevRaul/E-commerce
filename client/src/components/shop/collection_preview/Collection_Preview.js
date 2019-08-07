import React from 'react';

// Scss
import './collection_preview.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items
        .filter((item, idx) => idx < 4)
        .map(({ name, id }) => (
          <div key={id}>{name}</div>
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;