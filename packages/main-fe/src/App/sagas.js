import { fork, all, takeLatest, put } from 'redux-saga/effects';

import { push } from 'connected-react-router';

import * as localStorage from '@nikaah/utilities/lib/storage/local-storage';
import { FACEBOOK_LOGIN, FACEBOOK_GET_LOCAL_DATA } from './actionTypes';

import { getAuth } from '../Services/http/http.requests';

import modulesSagas from './Modules/Modules.sagas';
import {
  facebookLoginSuccess,
  facebookLoginFailure,
  facebookLoginLoading,
} from './actions';

function* facebookLoginOperation(action) {
  try {
    yield put(facebookLoginLoading());
    const user = yield getAuth(action.payload.accessToken);
    yield localStorage.set('user', user);
    yield put(facebookLoginSuccess(user));
    yield put(push('/?login=true&ref=login'));
  } catch (e) {
    yield localStorage.set('user', null);
    yield put(facebookLoginFailure(e));
  }
}

function* facebookLocalDataOperation() {
  try {
    const user = yield localStorage.get('user');
    if (user && user.accessToken /* add validation to access token here */) {
      yield put(facebookLoginSuccess(user));
    } else {
      yield put(push('/login'));
    }
  } catch (e) {
    yield put(facebookLoginSuccess(null));
  }
}

function* watchAppSaga() {
  yield all([
    takeLatest(FACEBOOK_LOGIN, facebookLoginOperation),
    takeLatest(FACEBOOK_GET_LOCAL_DATA, facebookLocalDataOperation),
  ]);
}
function* rootSaga() {
  yield all([fork(watchAppSaga), fork(modulesSagas)]);
}

export default rootSaga;
