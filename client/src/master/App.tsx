import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  LoginPg,
  ListAllPg,
  RegisterPg,
  EditStatusPg,
  IndividualEmployeePg
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
          <Route exact={true} path="/register" component={RegisterPg} />
          <Route exact={true} path="/" component={LoginPg} />
          <Route exact={true} path="/list" component={ListAllPg} />
          <Route exact={true} path="/employees/:id" component={IndividualEmployeePg} />
          <Route exact={true} path="/financeDepo/edit" component={EditStatusPg} />
      </Router>
    );
  }
}

export default App;