import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

        <div className = 'logo'>
          LOGO
        </div>

        <nav>
          <ul>
            <li className = 'first'>
              <Link to='/main'>Home</Link>
            </li>
            <li className = 'second'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className = 'third'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
