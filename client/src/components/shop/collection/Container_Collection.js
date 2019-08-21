import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Collection from './Collection';
import Spinner from '../../common/spinner/Spinner';

import { select_collection_isLoaded } from '../../../redux/selectors/shop';


const mapStateToProps = createStructuredSelector({
  isLoading: state => !select_collection_isLoaded(state)
});

const ContainerCollection = compose(connect(mapStateToProps), Spinner )(Collection);

export default ContainerCollection;