import { connect } from 'react-redux';
import Navbar from '../../components/Navbar';
import { logout, userList } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
	isConnected: state.isConnected,
  is_admin: state.is_admin
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => {
    dispatch(logout());
  },
  userList: () => {
    dispatch(userList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
