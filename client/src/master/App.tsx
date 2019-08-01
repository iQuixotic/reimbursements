import * as React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { 
  LoginPg,
  ListAllPg,
  RegisterPg,
  IndividualEmployeePg,
  RequestCreditPg,
  ViewAllReimPg,
  PageNotFound,
  Authorize
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
          <Route exact={true} path="/register" component={RegisterPg} />
          <Route exact={true} path="/" component={LoginPg} />

          <Authorize rolesAllowed={[1, 2]}>
              <Route exact={true} path="/list" component={ListAllPg} />
          </Authorize>
          <Route exact={true} path="/employees/:id" component={IndividualEmployeePg} />
          <Route exact={true} path="/requestCredit" component={RequestCreditPg} />
          <Route exact={true} path="/creditList/:getBy/:id" component={ViewAllReimPg} />
          <Route exact={true} path='/huh' component={PageNotFound}/>
          {/* // <Route exact={true} path='/' component={Authentication}/> */}

      </Router>
    );
  }
}

export default App;