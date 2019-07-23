import * as React from "react";
import { Layout } from '..';

class ListAllPg extends React.Component{
    public state = {
        message: "Hello from the ListAll Page."
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

export default ListAllPg;