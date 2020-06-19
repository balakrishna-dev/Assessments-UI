import { combineReducers } from 'redux';
import StudentReducer from './StudentReducer';
const rootReducer = combineReducers({
	students: StudentReducer
});

export default rootReducer;
