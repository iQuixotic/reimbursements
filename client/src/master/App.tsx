import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  LoginPg,
  ListAllPg,
  RegisterPg,
  EditStatusPg,
  IndividualEmployeePg,
  RequestCreditPg,
  ViewAllReimPg
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
          <Route exact={true} path="/requestCredit" component={RequestCreditPg} />
          <Route exact={true} path="/creditList/:id" component={ViewAllReimPg} />
      </Router>
    );
  }
}

export default App;