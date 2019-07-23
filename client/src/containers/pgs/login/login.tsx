import * as React from "react";
import { Layout } from '../../../containers';

class LoginPg extends React.Component{

  // -----------------------------------
  public render() {
      return(
          <Layout {...this.props} {...this.state}>
              Hello, I am the login !!!
          </Layout>
      )
  }
}

export default LoginPg;