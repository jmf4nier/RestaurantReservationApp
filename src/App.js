import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from "./components/login/Login"
import SignUp from './components/signup/Signup';
import Home from './components/Home'
function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <Router>
    <div className="App">
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  </Router>
    
    //  <Login/>
  );
}

export default App;
