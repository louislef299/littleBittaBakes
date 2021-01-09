import logo from './logo.svg';
import React from 'react';
import './App.css';
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
    return (
	<div className="App">
	    <Switch>
		<Route path="/" exact component={About} />
		<Route path="/about" component={Homepage} />
                {/*<Route path="/about" component={About} />
                   <Route path="/shop" component={About} />*/}
	    </Switch>
		<Navbar />

	</div>
    );
}

function Homepage(){
    return(
	<div className="Homepage">
	    <Navbar />
	    <About />
	</div>
    )
}


export default App;
