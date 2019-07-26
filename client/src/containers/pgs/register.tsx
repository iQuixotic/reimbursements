import * as React from "react";
import { Layout } from '..';

class RegisterPg extends React.Component{
    public state = {
        message: "Hello from the register Page."
    }

    componentWillMount = () => {
        // console.log(this.state)
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
                <label htmlFor="username">Email: </label>
                <input name='username' type="text"/>

                <label htmlFor="password">Password: </label>
                <input type='password' name='password'/>

                <label htmlFor="passwordConfirm">Confirm Password: </label>
                <input type='password' name='passwordConfirm'/>

                <label htmlFor="firstName">First Name: </label>
                <input type='password' name='firstName'/>

                <label htmlFor="lastName">Last Name: </label>
                <input type='password' name='lastName'/>

                {/* make a role 1-3 selection box here */}

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

export default RegisterPg;
