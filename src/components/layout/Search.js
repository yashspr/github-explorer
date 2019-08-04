import React from 'react'

export function Search(props) {

	const formSubmit = (e) => {
		e.preventDefault();
		props.getUsers(document.querySelector('#username_search').value);
	}

	return (
			<>
				<form className="form-inline row my-3">
					<input type="text" className="col-md-9 col-sm-12 form-control mb-2 mr-sm-2" id="username_search" placeholder="Search for a user" />
					<button type="submit" className="col-md-1 col-sm-12 btn btn-primary mb-2" onClick={formSubmit}>Submit</button>
				</form>
			</>
		)
}

export default Search
