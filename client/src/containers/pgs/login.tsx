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

          </Layout>
      )
  }
}

export default LoginPg;