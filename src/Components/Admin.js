import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, NavLink } from 'react-router-dom';
const Admin = props => (
  		<div>
  			<h1>Admin-Basic -authentication </h1>
  			 <Link to='/'>home</Link><br/>
  			 <Link to='/login'>login</Link>
  		</div>
  	);
  
  
  export default Admin;