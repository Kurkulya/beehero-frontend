import { connect } from 'react-redux';
import { getRegionsState } from "redux/selectors/regionsSelectors";
import Menu from './Menu';

const mapStateToProps = state => ({
    regions: getRegionsState(state),
});

export default connect(mapStateToProps)(Menu);
