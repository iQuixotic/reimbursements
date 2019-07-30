import * as React from "react";
import { Layout } from '..';
import { apiGET } from "../../api";
import './style.css';

class ViewAllReimPg extends React.Component{
    public state = {
        credits: [{
            _id: 1,
            author: '',
            amount: '',
            date_submitted: '',
            date_resolved: '',
            description: '',
            resolver: '',
            status: '',
            type: '',
            first_name: '',
            last_name: '',
        }],
        getBy: 'status',
        idToLookFor: '',
        editing: false,
        status: ''
    }
    
    toggleEdit = () => {
        this.setState({ editing: !this.state.editing})
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(e.currentTarget.value)
        console.log(this.state.getBy)
        // this.setState({
        //     getBy: e.target.
        // })
    }

    componentWillMount = () => {
        const myProps: any = this.props
        const a = myProps.match.params.getBy;
       if(a === 'status') this.getByStatus()
       if(a === 'author') this.getByAuthor()
    }

    getByStatus = () => {
        this.setState({ loading: true })
        const myProps: any = this.props
        console.log(myProps.match.params.getBy)
        apiGET.getAllCreditsByStatus(myProps.match.params.id)
            .then(res => res.json())
            .then(res => this.setState({ 
                credits: res,
                loading: false 
            }))
            .catch(err => { throw(err) });
    }

    getByAuthor = () => {
        this.setState({ loading: true })
        const myProps: any = this.props
        console.log(myProps.match.params.getBy)
        apiGET.getAllCreditsByAuthor(myProps.match.params.id)
            .then(res => res.json())
            .then(res => this.setState({ 
                credits: res,
                loading: false 
            }))
            .catch(err => { throw(err) });
    }

    sendPatchCredit = () => {
        console.log(this.state.status)
    }
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>
             
             <br/><br/>

                <input checked type="radio" value='status' name='getBy' 
                onChange={(e) => this.inputChangeHandler(e)}/>
                <label htmlFor="status">By Status</label>

                <input type="radio" value='author' name='getBy' 
                onChange={(e) => this.inputChangeHandler(e)}/>
                <label htmlFor="author">By Author</label>

                <input type="text" name='idToLookFor' onChange={(e) => this.inputChangeHandler(e)}/>

                <a href={`http://localhost:3000/creditList/${this.state.getBy}/${this.state.idToLookFor}`}
                // onClick={() => this.checkWhatToGetBy()}
                >Set Up</a>

                {this.state.editing ? (
                        <span className='patchable-inputs'>
                            {/* <input type='text' placeholder={this.state._id}/> */}
                            {/* <label htmlFor="passwordI">Password: </label>
                            <input name='passwordI' type='text' placeholder={this.state.password}/>
                             */}
                            {/* <label htmlFor="first_name">First Name: </label>                            
                            <input onChange={(e) => this.inputChangeHandler(e)} name='first_name' type='text' placeholder={this.state.first_name}/>
                     */}
                     <div className='gray-content-box'  >   
                    <div className="edit-pencil">
                        <i onClick={() => this.toggleEdit()} className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                            <label htmlFor="status"></label>
                            <select onChange={(e) => this.inputChangeHandler(e)} name="status">
                                <option value="1">Pending</option>
                                <option value="2">Approved</option>                                 
                                <option value="3">Denied</option>
                            </select>

                            <button className='submit-btn' onClick={() => this.sendPatchCredit()}>Submit Changes</button>
                            {/* <input type='text' placeholder={this.state.role_id}/> */}
                        </div>
                        </span>
                    ):(


              this.state.credits.map(each => {
                  return(
                  <div className='gray-content-box' key={each._id} >   
                    <div className="edit-pencil">
                        <i onClick={() => this.toggleEdit()} className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <span className='line-spacing'>Author: {each.author} <br/></span>
                    <span className='line-spacing'>Amount: {each.amount} <br/></span>
                    <span className='line-spacing'>Date Submitted: {each.date_submitted} <br/></span>
                    <span className='line-spacing'>Date Resolved: {each.date_resolved} <br/></span>
                    <span className='line-spacing'>Resolver: {each.resolver} <br/></span>
                    <span className='line-spacing'>Status: {each.status} <br/></span>
                    <span className='line-spacing'>Type: {each.type} <br/></span>

                  </div> )
              




              }))
            }
          </Layout>
      )
  }
}

export default ViewAllReimPg;