import { connect } from 'react-redux';
import Admin from '../../components/Admin';
import {
  saveUserList,
  saveUserId,
  dbDeleteUser,
  changeDbStatus
} from '../../actions';

const mapStateToProps = (state, ownProps) => ({
  list: state.userList,
  wait: state.wait,
  user_id: state.user_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveUserList: (list) => {
    dispatch(saveUserList(list));
  },
  saveUserId: (user_id) => {
    dispatch(saveUserId(user_id));
  },
  dbDeleteUser: (user_id) => {
    dispatch(dbDeleteUser(user_id));
  },
  changeDbStatus: (user_id, status) => {
    dispatch(changeDbStatus(user_id, status));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
