import actionTypes from './ActionTypes';

export const fetchStudentsData = (StudentsData) => (dispatch) => {
	if (StudentsData) {
		dispatch({
			type: actionTypes.FETCH_DATA_SUCCESS,
			payload: StudentsData
		});
	} else {
		dispatch({
			type: actionTypes.FETCH_DATA_ERROR,
			payload: 'No Data Found'
		});
	}
};
// export const fetchStudentsOptions = (options) => (dispatch) => {
// 	if (options) {
// 		dispatch({
// 			type: actionTypes.FETCH_OPTIONS_SUCCESS,
// 			payload: options
// 		});
// 	} else {
// 		dispatch({
// 			type: actionTypes.FETCH_OPTIONS_ERROR,
// 			payload: 'No Data Found'
// 		});
// 	}
// };
