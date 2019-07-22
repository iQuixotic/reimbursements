import * as React from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import { 
  LoginPg
} from '../containers';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/" component={LoginPg} />
        </div>
      </Router>
    );
  }
}

export default App;