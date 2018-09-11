import {
  fork, all,
} from 'redux-saga/effects';

function* a() {
  yield 10;
}
function* modulesSagas() {
  yield all([
    fork(a),
  ]);
}

export default modulesSagas;
