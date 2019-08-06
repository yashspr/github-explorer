/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export function Navbar(props) {

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand mr-5" href="#"><i className="fab fa-github" style={{ fontSize: "35px" }} ></i></a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-item nav-link active" href="#">Home</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar;
