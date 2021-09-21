import React from 'react';
import AdminTable from '../AdminTable';
import './style.scss';

const Admin = ({
  list,
  wait,
  saveUserId,
  user_id,
  dbDeleteUser,
  changeDbStatus
}) => {
  const deleteUser = () => {
    dbDeleteUser(user_id);
  }
  const changeStatusUser = () => {
    changeDbStatus(user_id, 1);
  }
  const changeStatusAdmin = () => {
    changeDbStatus(user_id, 0);
  }
  return (
    <div>
      <h1>Tableau des utilisateurs</h1>
      {!wait && (<h3>Wait for users list ...</h3>)}
      {wait && (<AdminTable list={list} saveUserId={saveUserId} />)}
      <div className="adminButtonGroup">
        <button className="adminButton" onClick={deleteUser}>Delete</button>
        <button className="adminButton" onClick={changeStatusUser}>Change to admin</button>
        <button className="adminButton" onClick={changeStatusAdmin}>Change to user</button>
      </div>
    </div>
  )
}

export default Admin;
