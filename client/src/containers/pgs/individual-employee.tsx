import * as React from "react";
import { Layout } from '..';
import './style.css';
import { apiGET } from "api";

class IndividualEmployeePg extends React.Component{
   
        public state = {
            _id: 1,
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            role_id: 1,
            loading: true
        }
        
    
            componentWillMount = () => {
                this.setState({ loading: true })
                const myProps: any = this.props
                apiGET.getSingleUser(myProps.match.params.id)
                  .then(res => res.json())
                  .then((res) => this.getInitialData(res))
                  .then(() => this.setState({ loading: false }))
                  .catch(err => { throw(err) });
              }
        getInitialData = async (...args: any) => {
            this.setState({ 
                _id: args[0]._id,
                username: args[0].username,
                password: args[0].password,
                first_name: args[0].first_name,
                last_name: args[0].last_name,
                email: args[0].email,
                role_id: args[0].role_id
             })
            // this.logState()
        }

        // logState = () => {
        //     console.log('this is the late state', this.state)
        // }
    
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


              <div className='gray-content-box individual-user-card'>
                  <p>ID: {this.state._id}</p>
                  <p>Password: {this.state.password}</p>
                  <p>First Name: {this.state.first_name}</p>
                  <p>Last Name: {this.state.last_name}</p>
                  <p>Email: {this.state.email}</p>
                  <p>Role: {this.state.role_id}</p>

              </div>
    
          </Layout>
      )
  }
}

export default IndividualEmployeePg;