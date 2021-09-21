import {
  SAVE_USER,
  CHANGE_VALUE,
  DISCONNECT,
  ERROR_MESSAGE,
  SAVE_USER_LIST,
  SAVE_USER_ID,
  DELETE_USER,
  CHANGE_STATUS
} from '../actions';

const initialState = {
  isConnected: false,
  email: '',
  name: '',
  token:[],
  user_id:'',
  error: '',
  is_admin:'',
  userList: [],
  wait: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        isConnected: true,
        name: action.name,
        email: action.email,
        token: action.token,
        user_id: action.user_id,
        is_admin: action.is_admin
      };
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.newValue,
      };
    case DISCONNECT:
      return {
        ...state,
        isConnected: false,
      }
    case ERROR_MESSAGE:
      return {
        ...state,
        error: action.error
        }
    case SAVE_USER_LIST:
      return {
        ...state,
        userList: action.list,
        wait: true
      }
    case SAVE_USER_ID:
      return {
        ...state,
        user_id: action.user_id
      }
    case DELETE_USER:
      return {
        ...state,
        userList: state.userList.filter((user) => { return action.user_id != user.id })
      }
    case CHANGE_STATUS:
      return {
        ...state,
        userList: state.userList.map(user => {
          if(user.id === action.user_id) {
            return {
              is_admin: action.is_admin,
              id: action.user_id,
              email: user.email,
              name: user.name
            }
          }
          else {
            return user;
          }
        }),
      }
  default:
    return state;
  }
};

export default reducer;
