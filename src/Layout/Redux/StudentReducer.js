import actionTypes from './ActionTypes';

const initialState = {
	studentsData: [],
	isLoading: true,
	error: '',
	options: []
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
					if (student.id.toString() === action.payload.id.toString()) {
						return {
							...student,
							grade: action.payload.grade
						};
					}
					return { ...student };
				})
			};
		case actionTypes.INDIVIDUAL_GRADE_UPDATE:
			return {
				...state,
				studentsData: state.studentsData.map((student) => {
					if (student.id.toString() === action.payload.studentId.toString()) {
						return {
							...student,
							params: student.params.map((param, indx) => {
								if (indx.toString() === action.payload.idx.toString())
									return {
										...param,
										grade: action.payload.grade
									};
								return { ...param };
							})
						};
					}
					return { ...student };
				})
			};
		case actionTypes.FETCH_OPTIONS_SUCCESS:
			return {
				...state,
				options: action.payload
			};
		case actionTypes.FETCH_OPTIONS_ERROR:
			return {
				...state,
				error: action.payload
			};
		default:
			return { ...state };
	}
}

export default studentReducer;
