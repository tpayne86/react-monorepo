import { combineReducers } from 'redux';
import memePageReducer from './MemePage/MemePage.reducer';


const modulesReducer = combineReducers({
  meme: memePageReducer,
});

export default modulesReducer;
