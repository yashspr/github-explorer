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

let githubclientid;
let githubclientsecret;

if(process.env.NODE_ENV !== 'production') {
	githubclientid = process.env.REACT_APP_GITHUB_CLIENT_ID;
	githubclientsecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
	githubclientid = process.env.GITHUB_CLIENT_ID;
	githubclientsecret = process.env.GITHUB_CLIENT_SECRET;
}

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
		responseType: "json"
	});

	// Search Users
	const searchUsers = async (username) => {
		setLoading();
		clearUsers();
		const data = await instance.get('/search/users', { params: { q: username, client_id: githubclientid, client_secret: githubclientsecret } });
		dispatch({
			type: SEARCH_USERS,
			payload: data.data.items
		});
	}

	// Get user information
	const getUserInfo = async (username) => {
		setLoading();
		const data = await instance.get(`/users/${username}`, { params: { client_id: githubclientid, client_secret: githubclientsecret } });
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
		const data = await instance.get(`/users/${username}/repos`, { params: { client_id: githubclientid, client_secret: githubclientsecret } });
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