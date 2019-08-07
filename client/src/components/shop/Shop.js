import React, { Component } from 'react';

// Components
import CollectionPreview from './collection_preview/Collection_Preview';

// Data
import SHOP_DATA from './data';

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  }
  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {
          collections.map(({ id, ...rest }) => <CollectionPreview key={id} {...rest} />)
        }
      </div>
    )
  }
}

export default Shop;