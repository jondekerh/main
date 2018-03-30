import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

        <div className = 'logo'>
          Jon Deker Houston
        </div>

        <nav>
          <ul>
            <li className = 'github'>
              <a href='https://github.com/jondekerh'>Github</a><br></br>
            </li>
            <li className = 'linkedin'>
              <a href='https://www.linkedin.com/in/jon-houston-ba499214a/'>Linkedin</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
