import * as React from "react";
import { Layout } from '..';
import { apiPOST } from "api";

class RegisterPg extends React.Component{
    public state = {
        email: '', 
        password: '', 
        firstName: '',
        lastName: '',
        username: '',
        roleId: 1
    }

    inputChangeHandler = (e) => {
        if(e.currentTarget.name === 'roleId') {
            this.setState({ [e.currentTarget.name]: parseInt(e.currentTarget.value)})
            console.log(this.state)
        } else {
        const email = this.state.email;
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
            username: email.substring(0, email.indexOf('@'))
        })
    }
    }

    registerSubmitHandler = () => {
        apiPOST.addNewUser(this.state)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => { throw err })
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

        <br/><br/>
            <div className="login-inputs-div">
                <label htmlFor="email">Email: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} name='email' type="text"/>

                <label htmlFor="password">Password: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='password'/>

                {/* <label htmlFor="passwordConfirm">Confirm Password: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='password' name='passwordConfirm'/> */}

                <label htmlFor="firstName">First Name: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='text' name='firstName'/>

                <label htmlFor="lastName">Last Name: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} type='text' name='lastName'/>

                <select onChange={(e) => this.inputChangeHandler(e)} name="roleId" id="">
                    <option value="1">Finance Manager</option>
                    <option value="2">Administrator</option>
                    <option value="3">Default User</option>
                </select>

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
