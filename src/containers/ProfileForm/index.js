import { connect } from 'react-redux';

// == Import : local
import ProfileForm from '../../components/ProfileForm';
import {
  changeValue,
  changeUserInformation,
  newUser,
  errorMessage
} from '../../actions';

const mapStateToProps = (state) => ({
  user_id: state.user_id,
  name: state.name,
  email: state.email,
  isConnected: state.isConnected,
  error: state.error
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (newValue, name) => {
    dispatch(changeValue(newValue, name));
  },
  changeUserInformation:(name, email, password) => {
    dispatch(changeUserInformation(name, email, password));
  },
  newUser:(email, name, password) => {
    dispatch(newUser(email, name, password));
  },
  errorMessage:(message) => {
    dispatch(errorMessage(message));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
