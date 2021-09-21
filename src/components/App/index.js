import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '../../containers/Navbar';
import LoginForm from '../../containers/LoginForm';
import Dashboard from '../../containers/Dashboard';
import Admin from '../../containers/Admin';
import ProfileForm from '../../containers/ProfileForm';
import NoMatch from '../NoMatch';
import './style.scss';

function App({ isConnected, is_admin }) {
  return (
		<div className="App">
			<header className="App-header">
				<Navbar />
			</header>
			<Switch>
			{!isConnected ? (
        <>
          <Route exact path="/" >
            <LoginForm />
          </Route>
          <Route exact path="/register">
            <ProfileForm />
          </Route>
        </>
      ) : (
        <>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/user">
            <ProfileForm />
          </Route>
          {is_admin === 1 ? (<Route exact path="/admin">
            <Admin />
          </Route>):(<></>)}
        </>
			)}
				<Route>
					<NoMatch />
				</Route>
			</Switch>
		</div>
  );
}

export default App;
