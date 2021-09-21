export const CONNEXION = 'CONNEXION';
export const connexion = (email, password) => ({
  type: CONNEXION,
  email,
  password
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});

export const DISCONNECT = 'DISCONNECT';
export const disconnect = () => ({
  type: DISCONNECT
});

export const SAVE_USER = 'SAVE_USER';
export const saveUser = (name, email, token, user_id, is_admin) => ({
  type: SAVE_USER,
  name,
  email,
  token,
  user_id,
  is_admin
});

export const CHANGE_USER_INFORMATION = 'CHANGE_USER_INFORMATION';
export const changeUserInformation = (name, email, password) => ({
  type: CHANGE_USER_INFORMATION,
  name,
  email,
  password
});

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (newValue, key) => ({
  type: CHANGE_VALUE,
  newValue,
  key,
});

export const ERROR_MESSAGE = 'ERROR_MESSAGE';
export const errorMessage = (error) => ({
  type: ERROR_MESSAGE,
  error
});

export const NEW_USER = 'NEW_USER';
export const newUser = (name, email, password) => ({
  type: NEW_USER,
  name,
  email,
  password
});

export const USER_LIST = 'USER_LIST';
export const userList = () => ({
  type: USER_LIST,
});

export const SAVE_USER_LIST = 'SAVE_USER_LIST';
export const saveUserList = (list) => ({
  type: SAVE_USER_LIST,
  list
});

export const SAVE_USER_ID = 'SAVE_USER_ID';
export const saveUserId = (user_id) => ({
  type: SAVE_USER_ID,
  user_id
});

export const DB_DELETE_USER = 'DB_DELETE_USER';
export const dbDeleteUser = (user_id) => ({
  type: DB_DELETE_USER,
  user_id
});

export const DELETE_USER = 'DELETE_USER';
export const deleteUser = (user_id) => ({
  type: DELETE_USER,
  user_id
});

export const CHANGE_DB_STATUS = 'CHANGE_DB_STATUS';
export const changeDbStatus = (user_id, is_admin) => ({
  type: CHANGE_DB_STATUS,
  user_id,
  is_admin
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = (user_id, is_admin, email, name) => ({
  type: CHANGE_STATUS,
  user_id,
  is_admin,
  email,
  name
});
