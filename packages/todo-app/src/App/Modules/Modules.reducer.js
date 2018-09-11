import { combineReducers } from 'redux';
import todoReducer from './Todo/Todo.reducer';

const modulesReducer = combineReducers({
  todo: todoReducer,
});

export default modulesReducer;
