import React, { Component } from 'react';
import NavBar from "./home/Navbar";
import Auth from "./auth/Auth";
import Splash from "./home/Splash";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '' //1
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');  //4
    if (token && !this.state.sessionToken) { //5
      this.setState({ sessionToken: token })
    }
  }
                //2
  setSessionState = (token) => {
    localStorage.setItem('token', token); //3
    this.setState({ sessionToken: token })
  }

  logout = () => {
    this.setState({ sessionToken: '' });
    localStorage.clear();
  }

  protectedViews = () => {
    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path ='/' exact>
            <Splash sessionToken = {this.state.sessionToken} />
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path ="/auth">
          <Auth setToken = {this.setSessionState} />
        </Route>
      )
    }
  }
  
  render() {
    return (
      <Router>
        <div>
          <NavBar clickLogout={this.logout} />
          {this.protectedViews()}
        </div>
      </Router>
    );
  }
}

export default App;
