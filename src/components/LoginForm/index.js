import React from 'react';
import './style.scss';
import Eyes from '../Eyes';
import { focusSvg, blurSvg } from '../../Utils/svgAction';
import { PasswordTest } from '../../Utils/passwordTest';
import { PasswordVisibility } from '../../Utils/PasswordVisibility';
import ShowPassword from '../../assets/img/show-password.png';

const LoginForm = ({ connexion, error }) => {
  const connect = (e) => {
    e.preventDefault();
    connexion(e.target.email.value, e.target.password.value);
  }
  const focusPass = () => {
    focusSvg();
  }
  const blurPass = () => {
    blurSvg();
  }
  const passwordTestChange = (e) => {
    PasswordTest(e.target.value);
  }
  const visiblePassword = () => {
    PasswordVisibility();
  }
  return (
    <>
    <form onSubmit={connect} className="loginform">
      <div>
        <Eyes />
      </div>
      <label>email
        <input
          type="email"
          name="email"
          placeholder="your email adress"
        />
      </label>
      <label>password
        <input
          type="password"
          name="password"
          placeholder="your password"
          id="password"
          onFocus={focusPass}
          onBlur={blurPass}
          onChange={passwordTestChange}
        />
        <img
          src={ShowPassword}
          alt="password-logo"
          className="passwordLogo"
          onClick={visiblePassword}
        />
        <p id="errorPassword"></p>
      </label>
      <button type="submit">Connexion</button>
    </form>
    {error !== '' ? (
			<div className="error">
				{error}
			</div>
    ) : (
			<div>
			</div>
    )}
    </>
  )
}

export default LoginForm;
