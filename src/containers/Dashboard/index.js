import { connect } from 'react-redux';
import Dashboard from '../../components/Dashboard';

const mapStateToProps = (state, ownProps) => ({
  name: state.name,
  email: state.email,
  token: state.token,
  user_id: state.user_id
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
