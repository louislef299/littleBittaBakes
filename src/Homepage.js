import React, { Component } from 'react';
import Navbar from './components/navbar'
import About from './components/about'
import App from './App.js'

function Homepage(){
    return(
	<div className="Homepage">
	    <Navbar />
	    <About />
	</div>
    )
}

export default Homepage;
