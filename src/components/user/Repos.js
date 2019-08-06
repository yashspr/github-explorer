import React from 'react';
import PropTypes from 'prop-types'
import RepoItem from './RepoItem';

const Repos = (props) => {
	const {repos} = props;
	return (
		<>
			{repos.map((repo, index) => <RepoItem repo={repo} key={index} /> )}
		</>
	)
}

Repos.propTypes = {
	repos: PropTypes.array.isRequired,
}

export default Repos;