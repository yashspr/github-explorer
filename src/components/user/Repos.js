import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GitHubContext from '../../context/github/githubContext';

const Repos = (props) => {
	const context = useContext(GitHubContext);
	const {repos} = context;

	return (
		<>
			{repos.map((repo, index) => <RepoItem repo={repo} key={index} /> )}
		</>
	)
}

export default Repos;