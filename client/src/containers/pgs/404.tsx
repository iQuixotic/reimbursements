import * as React from "react";
import { Layout } from '..';

class PageNotFound extends React.Component{
    public state = {
        message: "This is not the page you ar looking for..."
    }
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>
            <h2>
                {this.state.message}
            </h2>

          </Layout>
      )
  }
}

export default PageNotFound;