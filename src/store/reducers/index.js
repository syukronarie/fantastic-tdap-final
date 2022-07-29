import { combineReducers } from 'redux';
import increment from '../states/increment/incrementReducers';
import { getUserReducer, getUserInitialState } from '../states/getUsers/getUser.slices';

export const initialStateRootReducer = {
  getUser: getUserInitialState(),
};

const rootReducer = combineReducers({
  increment,
  getUser: getUserReducer,
});

export default rootReducer;
