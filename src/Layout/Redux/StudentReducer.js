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
					if (student.id.toString() === action.payload.id.toString()) {
						return {
							...student,
							grade: action.payload.grade
						};
					}
					return { ...student };
				})
			};
		// 			let id = action.payload.id;
		//   return Object.assign({}, state, {
		//     [id]: Object.assign({}, state[id], { grade: action.payload.grade })
		//   });
		default:
			return { ...state };
	}
}

export default studentReducer;
