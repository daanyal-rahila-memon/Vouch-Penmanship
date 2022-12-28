import {React} from "react";
import "../CSS/fyp.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Image } from "react-bootstrap";
import { useState } from "react";

function Login(props)
{
  const [valid, setValid] = useState(false) // Email validation State
  const [em, setEm] = useState(false)
  console.log("Login Component\n\n")
function handleInputChange(emailInputField)
{
  const nu_regex = new RegExp('[f0-9]+@[cfd]*\.nu\.edu\.pk')
  setValid(false)
  //console.log(" inside change Login Component\n\n")
  setEm(true)
  if (nu_regex.test(emailInputField.target.value))
  {
    setValid(previousState => { return !previousState})
  }  
}
  return (
    <div className="Login-form">
      <Form>
          <Button className="google-btn" type="submit">
              <Image className="google-icon" src="google_Icon.png"/>
                Sign in with Google
          </Button>
          <h4 className="or-line">or</h4>
          <Form.Group className="mb" controlId="formBasicEmail">
            <Form.Control className="mb-3" type="email" placeholder="Enter email" onChange={handleInputChange} />
          </Form.Group>
          {em && (!valid && <span className="invalid">* Invalid Email</span>)}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className="form-control" type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicCheckbox">
            <Form.Check className="check-form" type="checkbox"/>
            <strong>Remember Me</strong>
            <a href="#">Forgot Password</a>
          </Form.Group>
          <Button className="login-btn" variant="primary" type="submit">
            Login
          </Button>
          <div className="signup-link">
          <strong>Don’t have an account?</strong>
          <a href="#">Sign up for free</a>
          </div>
        </Form>
    </div>
  )
}

export default Login