import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Collection_Overview from './Collection_Overview';
import Spinner from '../../common/spinner/Spinner';

import { select_isLoading } from '../../../redux/selectors/shop';


const mapStateToProps = createStructuredSelector({
  isLoading: select_isLoading
});

const ContainerOverview = compose(connect(mapStateToProps), Spinner )(Collection_Overview);

export default ContainerOverview;