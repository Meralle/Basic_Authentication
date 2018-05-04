import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, NavLink } from 'react-router-dom';
const Home = props => (
  		<div>
  			<h1>Home-Basic -authentication </h1>
  			 <Link to='/login'>login</Link><br/>
  			 <Link to='/admin'>admin</Link>
  			 
  		</div>
  	);
  
  
  export default Home;