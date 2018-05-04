import React from 'react';
import Login from './Components/Login';
import Home  from './Components/Home';
import Admin from './Components/Admin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
      constructor(props){
        super(props);
          this.state={
            username:"",
            password:""


  }
    this.changeInput = this.changeInput.bind(this);
    this.handleAddText = this.handleAddText.bind(this);

}

    handleAddText (e){
      e.preventDefault();
      const user = {email: 'admin@me.com', password:'12345'}
      if(user.email === this.state.username && this.state.password){
        this.setState({loggedin: true})
        //alert('valid authentication')
      } else {
        alert('invalid email or password')
      }
      // let usernameCopy = [...this.state.username];
      // usernameCopy.push({
      //   password:this.state.username.password,
      //   email:this.state.username.email
      // });
      // this.setState({username : usernameCopy})
}
    changeInput(e){
      console.log(e.target.id)
      let value = e.target.value;
      if(e.target.id === "username"){
      this.setState({ username : value })
    } else {
      this.setState({ password : value })
    }
}

     

    render(){
      return(
        <div>
          <Switch>
            <Route exact path='/'component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/login' render={() => <Login 
              handleAddText={this.handleAddText}
              changeInput={this.changeInput}
              value={this.state.username}
              loggedin={this.state.loggedin}/>} 
              />
          </Switch>       
        </div>

      );
    }
  
 }

export default App;

 