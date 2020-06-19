import actionTypes from './ActionTypes';

const initialState = {
	items: [],
	isLoading: true,
	error: ''
};

function studentReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FETCH_DATA_SUCCESS:
			return {
				...state,
				items: action.payload,
				isLoading: false
			};
		case actionTypes.FETCH_DATA_ERROR:
			return {
				...state,
				error: action.payload,
				isLoading: false
			};
		default:
			return { ...state };
	}
}

export default studentReducer;
