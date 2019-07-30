import * as React from "react";
import { Layout } from '..';

class EditStatusPg extends React.Component{
    public state = {
        message: "Hello from the Edit the status Page."
    }
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>
        {this.state.message}

          </Layout>
      )
  }
}

export default EditStatusPg;