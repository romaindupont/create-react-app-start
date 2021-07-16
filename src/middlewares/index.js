import axios from 'axios';

/* import { } from '../actions'; */

axios.defaults.baseURL = '';

const ajax = (store) => (next) => (action) => {
  switch (action.type) {
    /* case LOGIN:
    {
      const state = store.getState();
      axios.post('/signin', {
        email: state.user.email,
        password: state.user.password,
        id_user: state.user.id_user,
        level: state.user.level,
        avatar_id: state.user.avatar_id,
      }, {
        baseURL: '',
      })
        .then((response) => {
          // action à créer
        })
        .catch((error) => {
        });
      break;
    } */
    default:
      next(action);
  }
};

export default ajax;