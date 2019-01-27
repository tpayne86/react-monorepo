import {
  fork, all,
} from 'redux-saga/effects';

import MemePageSaga from './MemePage/MemePage.sagas';

function* modulesSagas() {
  yield all([
    fork(MemePageSaga),
  ]);
}

export default modulesSagas;
