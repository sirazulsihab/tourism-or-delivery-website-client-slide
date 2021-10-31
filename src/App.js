import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';

import AuthProvider from './Context/AuthProvider';
import Review from './components/Review/Review';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/showCart">
            <Review></Review>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
