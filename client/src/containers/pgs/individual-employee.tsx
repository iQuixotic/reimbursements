import * as React from "react";
import { Layout } from '..';
import './style.css';
import { apiGET } from "api";

class IndividualEmployeePg extends React.Component {
   
        public state = {
            _id: 1,
            username: '',
            password: '',
            first_name: '',
            last_name: '',
            email: '',
            role_id: 1,
            loading: true,
            editing: true
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
        }


        toggleEdit = () => {
            this.setState({ editing: !this.state.editing})
            console.log(this.state.editing)
        }

        inputChangeHandler = (e) => {
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
    
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>

              <div className='gray-content-box individual-user-card'>
              <div className="edit-pencil">
                <i onClick={() => this.toggleEdit()} className="fa fa-pencil" aria-hidden="true"></i>
              </div>
                {
                    this.state.editing ? (
                        <span>
                            {/* <input type='text' placeholder={this.state._id}/> */}
                            <input type='text' placeholder={this.state.password}/>
                            <input type='text' placeholder={this.state.first_name}/>
                            <input type='text' placeholder={this.state.last_name}/>
                            <input type='text' placeholder={this.state.email}/>

                             <select onChange={(e) => this.inputChangeHandler(e)} name="type">
                                <option value="1">Finance Manager</option>
                                <option value="2">Administrator</option>                                 
                                <option value="3">Default User</option>
                            </select>
                            {/* <input type='text' placeholder={this.state.role_id}/> */}
                        </span>
                    ) : (
                        <span>
                            <p>ID: {this.state._id}</p>
                            <p>Password: {this.state.password}</p>
                            <p>First Name: {this.state.first_name}</p>
                            <p>Last Name: {this.state.last_name}</p>
                            <p>Email: {this.state.email}</p>
                            <p>Role: {this.state.role_id}</p>
                        </span>
                    )
                }
                 

              </div>
    
          </Layout>
      )
    }
}

export default IndividualEmployeePg;