import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import style from './SignIn.module.css'

const SignIn = (props) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === "foo" && credentials.password === "bar") {
      localStorage.setItem('userlist_loggedIn', true);
      props.history.push('/home')
    }
    else setError(true)
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <div className={style.form_card}>
      {
        localStorage.getItem('userlist_loggedIn') === 'false' ?
          <>
            <h3>Sign In</h3>
            <form className={style.from_container} onSubmit={handleSubmit}>
              <input type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                className={style.inp}
                placeholder="Username" required />
              <input type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                className={style.inp}
                placeholder="Password" required />
              {
                error && <p className={style.error_msg}>Invalid username/password</p>
              }
              <div>
                <button className={style.submit_btn}>Submit</button>
              </div>
            </form>
          </> :
          <>
            <p>Already signed in</p>
            <button className={style.submit_btn}>
              <Link className={style.link} to='/home'>Continue to Home</Link>
            </button>
          </>
      }
    </div>
  )
}

export default SignIn
