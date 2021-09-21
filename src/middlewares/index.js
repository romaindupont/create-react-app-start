import axios from 'axios';
import {
  CONNEXION,
  saveUser,
  LOGOUT,
  disconnect,
  CHANGE_USER_INFORMATION,
  errorMessage,
  NEW_USER,
  USER_LIST,
  saveUserList,
  DB_DELETE_USER,
  deleteUser,
  CHANGE_DB_STATUS,
  changeStatus
} from '../actions';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    case CONNEXION:
    {
      axios.post('/custom-login', {
        email: action.email,
        password: action.password,
        password_confirmation: action.password,
      }, {
        baseURL: 'http://127.0.0.1:8000/api/',
      })
      .then((response) => {
        localStorage.setItem('myToken', response.data.token);
        store.dispatch(saveUser(
          response.data.user.name,
          response.data.user.email,
          response.data.token,
          response.data.user.id,
          response.data.user.is_admin
        ));
      })
      .catch((error) => {
        store.dispatch(errorMessage(error.response.data.message));
      });
      break;
    }
    case LOGOUT:
    {
      const token = localStorage.getItem('myToken');
      axios.get('/logout', {
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          Authorization: `bearer ${localStorage.getItem(token)}`,
        },
      })
      .then((response) => {
        document.cookie = 'XSRF-TOKEN' + "=" + '' + ';';
        localStorage.clear();
        if (response.status === 200) {
          store.dispatch(disconnect());
        }
      })
      .catch((error) => {
        console.error(error);
      })
      break;
    }
    case CHANGE_USER_INFORMATION:
    {
      const state = store.getState();
      const token = localStorage.getItem('myToken');
      axios.put(`/user/${state.user_id}`, {
        name: action.name,
        email: action.email,
        password: action.password,
        password_confirmation: action.password
      }, {
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          Authorization: `bearer ${localStorage.getItem(token)}`,
        },
      })
      .then((response) => {
        console.log('ok');
      })
      .catch((error) => {
        store.dispatch(errorMessage(error.response.data.message));
      })
      break;
    }
    case NEW_USER:
    {
      axios.post('/register', {
        name: action.name,
        email: action.email,
        password: action.password,
        password_confirmation: action.password,
      }, {
        baseURL: 'http://127.0.0.1:8000/api/',
      })
      .then((response) => {
        localStorage.setItem('myToken', response.data.token);
        window.location.href = '/';
      })
      .catch((error) => {
        store.dispatch(errorMessage(error));
      });
      break;
    }
    case USER_LIST:
    {
      const token = localStorage.getItem('myToken');
      axios.get('/user/list', {
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
          Authorization: `bearer ${localStorage.getItem(token)}`,
        }
      })
      .then((response) => {
        store.dispatch(saveUserList(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
      break;
    }
    case DB_DELETE_USER:
      {
        const token = localStorage.getItem('myToken');
        axios.delete(`/user/${action.user_id}`, {
          baseURL: 'http://127.0.0.1:8000/api/',
          headers: {
            Authorization: `bearer ${localStorage.getItem(token)}`,
          }
        })
        .then((response) => {
          store.dispatch(deleteUser(action.user_id));
        })
        .catch((error) => {
          console.error(error);
        });
        break;
      }
    case CHANGE_DB_STATUS:
      {
        const token = localStorage.getItem('myToken');
        axios.patch(`/user/${action.user_id}`,
        {
          is_admin: action.is_admin
        },
        {
          baseURL: 'http://127.0.0.1:8000/api/',
          headers: {
            Authorization: `bearer ${localStorage.getItem(token)}`,
        }
        })
        .then((response) => {
          store.dispatch(changeStatus(
            response.data.id,
            response.data.is_admin,
            response.data.email,
            response.data.name
          ));
        })
        .catch((error) => {
          console.error(error);
        });
        break;
      }
  default:
    next(action);
  }
};

export default ajax;
