import actionTypes from './ActionTypes';

const updateGrade = (grade, id) => (dispatch) => {
	if (grade) {
		dispatch({
			type: actionTypes.UPDATE_GRADE,
			payload: {
				grade: grade,
				id: id
			}
		});
	} else {
		dispatch({
			type: actionTypes.UPDATE_GRADE,
			payload: 'No Data Found'
		});
	}
};

export default updateGrade;
