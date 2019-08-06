import React, {Component} from 'react'

export class Search extends Component {

	state = {
		searchText: ""
	}

	formSubmit = (e) => {
		e.preventDefault();
		if(this.state.searchText.trim() === "") {
			this.props.clearUsers();
		} else {
			this.props.getUsers(document.querySelector('#username_search').value.trim());
		}
	}

	onChange = (e) => {
		this.setState({searchText: e.target.value.trim()})
	}

	render() {
		return (
			<>
				<form className="form-inline row my-3" onSubmit={this.formSubmit}>
					<input type="text" className="col-md-9 col-sm-12 form-control mb-2 mr-sm-2" id="username_search" placeholder="Search for a user" value={this.state.searchText} onChange={this.onChange} />
					<button type="submit" className="col-md-1 col-sm-12 btn btn-primary mb-2" onClick={this.formSubmit}>Submit</button>
				</form>
			</>
		)
	}
}

export default Search
