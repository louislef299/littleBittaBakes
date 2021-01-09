import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default class Navbar extends Component {
    render () {
	return (
	    <div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		    <div className="container-fluid">
			<a className="navbar-brand mr-auto" style={{fontSize:"2.9em",color:"#cc00ff",fontFamily:"cursive"}} href="#"><strong>LittleBitta</strong></a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav mr-auto">
				<li className="nav-item active col-md-3">
				    <a className="nav-link" style={{fontSize:"1.8em"}} href="#">Home <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item col-md-3">
				    <a style={{fontSize:"1.8em"}} className="nav-link" href="#">Features</a>
				</li>
				<li className="nav-item col-md-3">
				    <a className="nav-link" style={{fontSize:"1.8em"}} href="#">Pricing</a>
				</li>
				<li className="nav-item col-md-3">
				    <a className="nav-link" style={{fontSize:"1.8em"}} href="#">Disabled</a>
				</li>
			    </ul>
			    <form className="form-inline my-5 ml-auto my-lg-0">
				<input className="form-control mr-sm-0" type="search" placeholder="Search" aria-label="Search" />
				<button className="btn btn-outline-success my-2 my-sm-0" type="submit"><span class="glyphicon glyphicon-search"></span></button>
			    </form>
			</div>
		    </div>
		</nav>
	    </div>
	)
    }
}
