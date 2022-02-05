import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function App(props) {
  const [user, setuser] = useState({
    email: '',
    password: ''
  })

  const [isEmailValid, setisEmailValid] = useState(true)
  const [emailError, setemailError] = useState('')

  const [isPasswordValid, setisPasswordValid] = useState(true)
  const [passwordError, setpasswordError] = useState('')

  const login = ((event) => {
    event.preventDefault()

    const validEmail = validateEmail(user.email)
    const validPass = validatePass(user.password)

  })

  const validateEmail = (email) => {
    let empty2 = /^$/
    const letter = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (empty2.test(email)) {
      setisEmailValid(false)
      setemailError('*Please fill the field')
      return false
    } else if (letter.test(email)) {
      setisEmailValid(true)
      setemailError('')
      return true
    } else {
      setisEmailValid(false)
      setemailError('*Email should be strong')
      return false
    }
  }

  const validatePass = (pass) => {
    let emp = /^$/
    let lett = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (emp.test(pass)) {
      setisPasswordValid(false)
      setpasswordError('*Please fill the field')
      return false
    } else if (lett.test(pass)) {
      setisPasswordValid(true)
      setpasswordError('')
      return true
    } else {
      setisPasswordValid(false)
      setpasswordError('*Password should be strong')
      return false
    }
  }

  const handelChange = (event) => {
    const userCopy = { ...user }
    userCopy[event.target.name] = event.target.value
    setuser(userCopy)
  }
  return (
    <div className="App" >
      <div className='main_divtag'>
        <h2>Sign in to your account</h2>
        <form onSubmit={login} className='container'>
          <div className='box'>
            <div class="mb-3" >
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              {!isEmailValid ? <span style={{ color: 'red', border: 'red', fontSize: '15px' }}>{emailError}</span> : null}
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email address....' name='email' onChange={handelChange} value={user.email} />

              <a href='' >Forgot password ?</a>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              {!isPasswordValid ? <span style={{ color: 'red', border: 'red', fontSize: '15px' }}>{passwordError}</span> : null}
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your Password...' name='password' onChange={handelChange} value={user.password} />


            </div> <br />

            <div className='btn'>
              <input type='submit' value='Sign in' />
            </div> <br /> <br /> <br />
          </div>

        </form> <br /> <br />
        <div className='box2'>
          <p>New user? <a href=''>Create an account.</a> </p>
        </div>
      </div>
    </div>
  );
}

export default App;
