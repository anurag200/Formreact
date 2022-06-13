import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const navigate = useNavigate()
  const user = {
    name: 'anurag',
    email: 'anuragchauhan7248@gmail.com',
    password: 123456,
  }
  const Login = (e) => {
    e.preventDefault()
    if (user.name === userName || user.email === userName) {
      if (user.password == userPassword) {
        navigate('Allcomponent')
      } else {
        alert('your password worn')
      }
    } else {
      alert('plaese enter userId and password ')
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4 mx-auto mt-5">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Id
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setUserPassword(e.target.value)}
                  value={userPassword}
                />
              </div>

              <button type="submit" class="btn btn-primary" onClick={Login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
