// Write your JS code here

import Cookies from 'js-cookie'
import {Redirect, withRouter} from 'react-router-dom'

import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setCookieNavigatingToHome = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {expires: 30})

    history.replace('/')
  }

  const onClickLogin = async () => {
    const userData = {username: 'praneetha', password: 'praneetha@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      setCookieNavigatingToHome(data.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button className="login-btn" type="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
