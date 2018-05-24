import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, NavLink } from 'react-router-dom';
const Home = props => (
	// if(props.loggedin === true) {
 //          return <Redirect to="/admin"/>
 //         } else {
 //          return <Redirect to="/login"/>
 //       } 
  		<div>
  			<h1>Home-Basic -authentication </h1>
  			 <Link to='/login'>login</Link><br/>
  			 <Link to='/admin'>admin</Link>
  			 
  		</div>
  	);
  
  
  export default Home;