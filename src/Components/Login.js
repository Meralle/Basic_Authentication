import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

class Login extends React.Component {
  render() {
  	if(this.props.loggedin){ 
  		return <Redirect to="/admin"/>
  	}
  	//  else {
  	// 	return <Redirect to="/login"/>
  	// }

  	return(
  		<div>
  			<div className="container">
  				<h1><strong>LOG-IN</strong></h1>
					<form action="#" className="addTodo form-inline row">
						<input className="inputs" type="text" aria-describedby="emailHelp" placeholder="username" id="username"  onChange={this.props.changeInput}/>
						<input className="inputs" type="text" aria-describedby="emailHelp" placeholder="Email" id="password" onChange={this.props.changeInput} />
						<button className="waves-effect waves-light btn" type="submit"  onClick={(e) => this.props.handleAddText(e)}>
							Submit
		          		</button>
					</form>
					<Link to='/'>back to home</Link><br/>
					<Link to='/admin'>back to admin</Link>
				</div>
	
  		</div>
  	);
  }
 }
  
export default Login;