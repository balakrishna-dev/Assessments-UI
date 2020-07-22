import actionTypes from './ActionTypes';

const individualGradeUpdate = (grade, idx, studentId) => (dispatch) => {
	if (grade) {
		dispatch({
			type: actionTypes.INDIVIDUAL_GRADE_UPDATE,
			payload: {
				grade,
				idx,
				studentId
			}
		});
	} else {
		dispatch({
			type: actionTypes.INDIVIDUAL_GRADE_UPDATE,
			payload: 'No Data Found'
		});
	}
};

export default individualGradeUpdate;
