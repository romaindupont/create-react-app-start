import { connect } from 'react-redux';
import App from '../../components/App';

const mapStateToProps = (state, ownProps) => ({
  isConnected: state.isConnected,
  is_admin: state.is_admin
});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App)
