import React, { Component } from 'react';

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
              <a href = '#'>Home?</a>
            </li>
            <li className = 'second'>
              <a href = '#'>Projects?</a>
            </li>
            <li className = 'third'>
              <a href = '#'>Contact?</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
