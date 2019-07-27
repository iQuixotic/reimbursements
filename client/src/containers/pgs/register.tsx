import * as React from "react";
import { Layout } from '..';
import { apiPOST } from "api";

class RegisterPg extends React.Component{
    public state = {
        message: "Hello from the register Page.",
        email: '', 
        password: '', 
        firstName: '',
        lastName: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state)
    }

    registerSubmitHandler = () => {
        apiPOST.addNewUser(this.state)
        console.log('hello')
        console.log(this.state)
    }

    componentWillMount = () => {
        // console.log(this.state)
    }
  // -----------------------------------
  public render() {
      return(
        <Layout {...this.state}>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            {this.state.message}

            <div className="login-inputs-div">
                <label htmlFor="email">Email: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} name='email' type="text"/>

                <label htmlFor="password">Password: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='password'/>

                {/* <label htmlFor="passwordConfirm">Confirm Password: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='passwordConfirm'/> */}

                <label htmlFor="firstName">First Name: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='firstName'/>

                <label htmlFor="lastName">Last Name: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='lastName'/>

                {/* make a role 1-3 selection box here */}

                <a href="#">Forgot Password...</a>
                <div className="login-and-register-btns">
                    <button >Login</button>
                    <button onClick={() => this.registerSubmitHandler()}>Register</button>
                </div>
            </div>

    </Layout>
      )
  }
}

export default RegisterPg;
