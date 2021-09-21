import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { connexion } from '../../actions';

const mapStateToProps = (state, ownProps) => ({
	currentValue: state[ownProps.name],
	error: state.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  connexion: (email, password) => {
    dispatch(connexion(email, password));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
