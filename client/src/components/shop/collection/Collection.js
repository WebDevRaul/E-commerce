import React from 'react';
import PropTypes from 'prop-types';

// Components
import CollectionItem from '../collection_item/Collection_Item';

// Redux
import { connect } from 'react-redux';
import { select_collection } from '../../../redux/selectors/shop';

// Scss
import './collection.scss';

const Collection = ({ collection }) => (
  <div className='collection'>
    <h2>collection</h2>
  </div>
);

Collection.propTypes = {
  collection: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  collection: select_collection(ownProps.match.params.collection_id)(state)
});

export default connect( mapStateToProps, null )(Collection);