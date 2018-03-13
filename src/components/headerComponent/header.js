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
            <li className = 'home'>
              <Link to='/main'>Home</Link>
            </li>
            <li className = 'projects'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className = 'contact'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
