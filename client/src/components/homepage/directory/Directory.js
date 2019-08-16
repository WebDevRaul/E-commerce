import React from 'react';
import PropTypes from 'prop-types';

// Components
import MenuItem from '../menu_item/Menu_item';

// Redux
import { connect } from 'react-redux';
import { select_directory } from '../../../redux/selectors/directory';
import { createStructuredSelector } from 'reselect';

// Scss
import './directory.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))
    }
  </div>
);

Directory.propTypes = {
  sections: PropTypes.array.isRequired
}

const mapStateToProps = createStructuredSelector({
  sections: select_directory
})

export default connect( mapStateToProps, null )(Directory)