import * as React from "react";
import { Layout } from '..';
import { apiPOST } from "api";


class LoginPg extends React.Component{
    public state = {
        username: '',
        password: '',
        role_id: 1,
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state)
    }

    loginSubmitHandler = () => {
        apiPOST.login(this.state)
            .then(res => res.json())
            .then(res => window.localStorage.setItem("token", res.token))
            // .then(() => this.getRole())
            .catch(err => { throw err })
    }

   

    

  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>

        <br/><br/>

        <div className="login-inputs-div">
            <label htmlFor="username">Username: </label>
            <input onChange={e => this.inputChangeHandler(e)} 
            name='username' type="text"/>

            <label htmlFor="password">Password: </label>
            <input onChange={e => this.inputChangeHandler(e)} 
            type='password' name='password'/>

            <a href="#">Forgot Password...</a>
            <div className="login-and-register-btns">
                <button onClick={()=> this.loginSubmitHandler()}>Login</button>
                {/* <button>Register</button> */}
            </div>
        </div>

          </Layout>
      )
  }
}

export default LoginPg;