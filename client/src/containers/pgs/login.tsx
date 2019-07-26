import * as React from "react";
import { Layout } from '..';

class LoginPg extends React.Component{
    public state = {
        message: "Hello from the Login Page."
    }
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.props} {...this.state}>
              Hello, I am the login !!!
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
        {this.state.message}

        <div className="login-inputs-div">
            <label htmlFor="username">Username: </label>
            <input name='username' type="text"/>
            <label htmlFor="password">Password: </label>
            <input type='password' name='password'/>
            <a href="#">Forgot Password...</a>
            <div className="login-and-register-btns">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>

          </Layout>
      )
  }
}

export default LoginPg;