//Confused? Watch the tutorial again @ https://www.youtube.com/watch?v=nusgoj74a3Y

import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header.js';
import ChatBot from './components/footerComponent/chatBot.js';
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

            {/*although currently not using Link, it may be necessary later. see react-browser-router docs*/}
            <Route exact path='/' component={Projects} />

          <ChatBot />

        </div>
      </Router>
    );
  }
}

export default App;
