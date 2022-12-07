import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Reference Site</h2>
      <nav>
        <Link to="/">
          <button className="nav-btn">Home</button>
        </Link>
        <Link to="/reference">
          <button className="nav-btn">Reference</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header