import actionTypes from './ActionTypes';

const fetchStudentsData = (StudentsData) => (dispatch) => {
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

export default fetchStudentsData;
