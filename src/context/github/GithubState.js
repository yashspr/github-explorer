/* eslint-disable react-hooks/rules-of-hooks */
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import reducer from './githubReducer'
import {
	GET_USER_INFO,
	GET_USER_REPOS,
	SEARCH_USERS,
	CLEAR_USERS,
	SET_LOADING,
	CLEAR_USER_AND_REPOS
} from '../types';

const githubState = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	const instance = axios.create({
		baseURL: "https://api.github.com/",
		headers: {
			"Authorization": "token 096419c07b33988fc97d74277bf4ceae470fd84e"
		},
		responseType: "json"
	});

	// Search Users
	const searchUsers = async (username) => {
		setLoading();
		clearUsers();
		const data = await instance.get('/search/users', { params: { q: username } });
		dispatch({
			type: SEARCH_USERS,
			payload: data.data.items
		});
	}

	// Get user information
	const getUserInfo = async (username) => {
		setLoading();
		const data = await instance.get(`/users/${username}`);
		dispatch({
			type: GET_USER_INFO,
			payload: data.data
		});
	}

	// Clear users
	const clearUsers = () => {
		dispatch({type: CLEAR_USERS});
	}

	// Get Repos
	const getReposInfo = async (username) => {
		setLoading();
		const data = await instance.get(`/users/${username}/repos`);
		dispatch({
			type: GET_USER_REPOS,
			payload: data.data
		})
	}

	const clearUserAndRepos = () => {
		dispatch({
			type: CLEAR_USER_AND_REPOS
		});
	}

	// Set loading
	const setLoading = () => {
		dispatch({type: SET_LOADING});
	}

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUserInfo,
				getReposInfo,
				clearUserAndRepos
			}}
		>
			{props.children}
		</GithubContext.Provider>
	)
}

export default githubState;