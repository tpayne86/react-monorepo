import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import NObject from '@nikaah/utilities/lib/objects/new-ref-object';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAILURE,
  FACEBOOK_LOGIN_LOADING,
} from './actionTypes';
import modulesReducer from './Modules/Modules.reducer';

const defaultState = NObject({
  profile: {
    loading: false,
    data: null,
    error: null,
  },
  loggedIn: false,
});
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_LOADING:
      return state.setIn(['profile', 'loading'], true);
    case FACEBOOK_LOGIN_SUCCESS:
      return state
        .setIn(['profile', 'data'], action.payload)
        .setIn(['profile', 'loading'], false)
        .set('loggedIn', !!action.payload);
    case FACEBOOK_LOGIN_FAILURE:
      return state
        .setIn(['profile', 'data'], null)
        .setIn(['profile', 'loading'], false)
        .set('loggedIn', false);
    default:
      return state;
  }
};
const defState = {};
const appReducer = (state = defState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const reducer = (history) =>
  combineReducers({
    user: userReducer,
    modules: modulesReducer,
    app: appReducer,
    router: connectRouter(history),
  });
export { userReducer, appReducer };
export default reducer;
