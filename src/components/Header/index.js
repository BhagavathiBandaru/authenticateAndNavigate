// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <ul className="menu-bar">
      <li>
        <Link to="/" className="menu-item">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="menu-item">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
