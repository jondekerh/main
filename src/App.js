//Confused? Watch the tutorial again @ https://www.youtube.com/watch?v=nusgoj74a3Y

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


//components
import Header from './components/headerComponent/header.js';
import Footer from './components/footerComponent/footer.js';
import Homepage from './components/pages/homePage.js';
import Projects from './components/pages/projects.js';

//includes
import './assets/css/default.min.css';

//main
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

            <Route exact path='/' component={Homepage} />
            <Route exact path='/projects' component={Projects} />

          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
