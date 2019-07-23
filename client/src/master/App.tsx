import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  LoginPg,
  ListAllPg,
  RegisterPg,
  EditStatusPg
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={LoginPg} />
          <Route exact={true} path="/list" component={ListAllPg} />
          <Route exact={true} path="/register" component={RegisterPg} />
          <Route exact={true} path="/financeDepo/edit" component={EditStatusPg} />


        </div>
      </Router>
    );
  }
}

export default App;