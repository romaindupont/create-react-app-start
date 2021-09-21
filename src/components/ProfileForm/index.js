import React from 'react';
import Eyes from '../Eyes';
import './style.scss';
import { focusSvg, blurSvg } from '../../Utils/svgAction';
import { PasswordTest } from '../../Utils/passwordTest';
import { PasswordVisibility } from '../../Utils/PasswordVisibility';
import ShowPassword from '../../assets/img/show-password.png';

const ProfileForm = ({
  name,
  email,
  changeValue,
  changeUserInformation,
  isConnected,
  newUser,
  error,
  errorMessage
}) => {
  const connect = (e) => {
    e.preventDefault();
    const error = document.getElementById('errorPassword');
    if (e.target.password.value === e.target.password_confirmation.value & error.textContent == "Mot de passe valide" & isConnected) {
      changeUserInformation(e.target.name.value, e.target.email.value, e.target.password.value);
    }
    if (e.target.password.value === e.target.password_confirmation.value & error.textContent == "Mot de passe valide" & !isConnected) {
      newUser(e.target.name.value, e.target.email.value, e.target.password.value);
    }
    if (error.textContent == "Mot de passe invalide") {
      errorMessage('Le mot de passe ne respecte pas les règles');
    }
    else {
      errorMessage('Le mot de passe de confirmation n\'est pas identique');
    }
  }
  const change = (e) => {
    e.preventDefault();
    changeValue(e.target.value, e.target.name);
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
      <label>name
        <input
          type="text"
          name="name"
          placeholder="your name"
          onChange={change}
          value={name}
        />
      </label>
      <label>email
        <input
          type="email"
          name="email"
          placeholder="your email adress"
          onChange={change}
          value={email}
        />
      </label>
      <label>password
        <input
          type="password"
          id="password"
          name="password"
          placeholder="your password"
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
      </label>
      <label>password_confirmation
        <input
          type="password"
          name="password_confirmation"
          placeholder="your password_confirmation"
          onFocus={focusPass}
          onBlur={blurPass}
          onChange={passwordTestChange}
        />
        <p id="errorPassword"></p>
      </label>
      <button type="submit">{isConnected ? "Change" : "Registration" }</button>
    </form>
    {error !== '' ? (
      <div className="error">
          {error}
      </div>
    ) : (
      <div>
      </div>
    )
    }
  </>
  )
}

export default ProfileForm;
