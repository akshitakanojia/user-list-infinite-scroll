import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import style from './Navbar.module.css'

const Navbar = (props) => {
  const handleLogout = () => {
    localStorage.setItem('userlist_loggedIn', false)
    props.history.push('/')
  }

  return (
    <nav className={style.nav_container}>
      <div className={style.logo}>
        <span className="material-icons">
          polymer
        </span>
      </div>
      <div className={style.options}>
        <ul className={style.options_list}>
          {localStorage.getItem('userlist_loggedIn') === 'false' &&
            <li><Link to="/">Sign In</Link></li>}
          <li><Link to="/home"> Home</Link></li>
          {localStorage.getItem('userlist_loggedIn') === 'true' &&
            <li onClick={handleLogout} style={{ cursor: "pointer" }}>Logout</li>}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
