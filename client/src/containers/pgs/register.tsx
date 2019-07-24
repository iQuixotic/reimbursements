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

export default RegisterPg;