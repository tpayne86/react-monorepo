import { combineReducers } from 'redux';

const modulesReducer = combineReducers({
  meme: () => ({ a: 1 }),
});

export default modulesReducer;
