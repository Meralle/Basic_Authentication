import React from 'react';
import Login from './Components/Login';
import Home  from './Components/Home';
import Admin from './Components/Admin';
import { BrowserRouter, Switch, Route, Redirect, prompt } from 'react-router-dom';

class App extends React.Component {
      constructor(props){
        super(props);
          this.state={
            username:"",
            password:"",
            loggedin:false


  }
    this.changeInput = this.changeInput.bind(this);
    this.handleAddText = this.handleAddText.bind(this);

}

    handleAddText (e){
      e.preventDefault();
      const user = {email: 'admin@me.com', password:'12345'}
      // const userdata = {email:"", password:""}
      if(user.email === this.state.username && user.password === this.state.password){
        this.setState({loggedin: true})
        //alert('valid authentication')
        } else {
          alert('invalid email or password')
        }
       //   if(this.state.loggedin === true) {
       //    return <Redirect to="/admin"/>
       //   } else {
       //    return <Redirect to="/login"/>
       // } 
      localStorage.getItem("username", JSON.parse(value))      
}
    changeInput(e){
      console.log(e.target.id)
      let value = e.target.value;
      if(e.target.id === "username"){
      this.setState({ username : value })
    } else {
      this.setState({ password : value })
    }
     // localStorage.setItem("username", JSON.stringify(value))
} 

    render(){ 
    //   if(this.state.loggedin === true){ 
    //   return <Redirect to="/admin"/>
    // }
    //  else {
    //   return <Redirect to="/login"/>
    // }
    
      return(
        <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/admin'  component={Admin}/> {/*render={() =>
            ( this.state.loggedin === true ? <Redirect to="/admin"/> : <Redirect to="/"/> )}/>
          */}
            <Route exact path='/login' render={() => 
              <Login 
              handleAddText={this.handleAddText}
              changeInput={this.changeInput}
              value={this.state.username}
              loggedin={this.state.loggedin}/>

             }/>
             
          </Switch>       
        </div>

      );
    }
  
 }

export default App;

 