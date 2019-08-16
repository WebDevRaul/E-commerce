import React from 'react';
import PropTypes from 'prop-types';

// Components
import CollectionItem from '../collection_item/Collection_Item';

// Redux
import { connect } from 'react-redux';
import { select_collection } from '../../../redux/selectors/shop';

// Scss
import './collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
  <div className='collection'>
    <h2 className='title'>{title}</h2>
    <div className='items'>
      {items.map(item => <CollectionItem key={item.id} item={item} />)}
    </div>
  </div>
  );
}

Collection.propTypes = {
  collection: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  collection: select_collection(ownProps.match.params.collection_id)(state)
});

export default connect( mapStateToProps, null )(Collection);