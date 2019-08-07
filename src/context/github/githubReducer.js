import {
	GET_USER_INFO,
	GET_USER_REPOS,
	SEARCH_USERS,
	CLEAR_USERS,
	SET_LOADING,
	CLEAR_USER_AND_REPOS
} from '../types';

export default (state, action) => {
	switch(action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			}
		case GET_USER_INFO:
			return {
				...state,
				user: action.payload,
				loading: false
			}
		case CLEAR_USERS:
			return {
				...state,
				users: null
			}
		case GET_USER_REPOS:
			return {
				...state,
				repos: action.payload
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case CLEAR_USER_AND_REPOS:
			return {
				...state,
				user: null,
				repos: null
			}
		default: return state;
	}
}