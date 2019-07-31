import * as React from "react";
import { Layout } from '..';
import './style.css';
import { apiGET, apiPATCH } from "api";

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
            editing: false
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
            const myProps: any = this.props
            console.log('these are the args im getting', args)
            this.setState({ 
                loading: false,
                _id: myProps.match.params.id,
                username: args[0].username,
                password: args[0].password,
                first_name: args[0].first_name,
                last_name: args[0].last_name,
                email: args[0].email,
                role_id: args[0].role_id
             })
             console.log(this.state)
        }


        toggleEdit = () => {
            this.setState({ editing: !this.state.editing})
        }

        inputChangeHandler = (e) => {
            if(e.currentTarget.name === 'role_id') {
                this.setState({ [e.currentTarget.name]: parseInt(e.currentTarget.value)})
            } else {
            const email = this.state.email;
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value,
                username: email.substring(0, email.indexOf('@'))
            })
          }
          console.log('this is teh role', this.state.role_id)
        }

        sendPatchUser = () => {
            apiPATCH.patchUser(this.state)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => { throw(err) });
            // console.log(this.state)
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
                        <span className='patchable-inputs'>
                          
                            <label htmlFor="first_name">First Name: </label>                            
                            <input onChange={(e) => this.inputChangeHandler(e)} name='first_name' type='text' placeholder={this.state.first_name}/>
                           
                            <label htmlFor="first_name">Last Name: </label>                            
                            <input onChange={(e) => this.inputChangeHandler(e)} name='last_name' type='text' placeholder={this.state.last_name}/>

                            <label htmlFor="email">Email: </label>                            
                            <input onChange={(e) => this.inputChangeHandler(e)} name='email' type='text' placeholder={this.state.email}/>

                             <select onChange={(e) => this.inputChangeHandler(e)} name="role_id">
                                <option value="1">Finance Manager</option>
                                <option value="2">Administrator</option>                                 
                                <option value="3">Default User</option>
                            </select>

                            <button className='submit-btn' onClick={() => this.sendPatchUser()}>Submit Changes</button>
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