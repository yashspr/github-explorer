import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

export function Search(props) {

	const [searchText, setSearchText] = useState('');
	const context = useContext(GithubContext);
	const {searchUsers, clearUsers} = context;

	const formSubmit = (e) => {
		e.preventDefault();
		if (e.target.innerText === "Clear" || searchText === "") {
			clearUsers();
			setSearchText("");
		} else {
			searchUsers(searchText);
		}
	}

	const onChange = (e) => {
		setSearchText(e.target.value.trim());
	}

	return (
		<>
			<form className="form-inline row my-3" onSubmit={formSubmit}>
				<input type="text" className="col-md-9 col-sm-12 form-control mb-2 mr-sm-2" id="username_search" placeholder="Search for a user" value={searchText} onChange={onChange} />
				<button type="submit" className="col-md-1 col-sm-12 btn btn-primary mb-2 mr-1" onClick={formSubmit}>Submit</button>
				<button type="submit" className="col-md-1 col-sm-12 btn btn-secondary mb-2" onClick={formSubmit}>Clear</button>
			</form>
		</>
	)
}

export default Search
