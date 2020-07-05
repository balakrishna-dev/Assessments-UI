import actionTypes from './ActionTypes';

const initialState = {
	studentsData: [],
	isLoading: true,
	error: ''
};

function studentReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_DATA_SUCCESS:
			return {
				...state,
				studentsData: action.payload,
				isLoading: false
			};
		case actionTypes.FETCH_DATA_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};
		case actionTypes.UPDATE_GRADE:
			return {
				...state,
				studentsData: state.studentsData.map((student) => {
					if (student.id == action.payload.id) {
						return {
							...student,
							grade: action.payload.grade
						};
					}
					return { ...student };
				})
			};
		default:
			return { ...state };
	}
}

export default studentReducer;
