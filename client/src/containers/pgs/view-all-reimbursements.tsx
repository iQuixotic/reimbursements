import * as React from "react";
import { Layout } from '..';
import { apiGET, apiPATCH } from "../../api";
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
            status: 1,
            type: '',
            first_name: '',
            last_name: '',
        }],
        getBy: 'status',
        idToLookFor: '',
        editing: false,
        status: '',
        editingNum: 1,
        sendingNum: 0
    }
    
    toggleEdit = (e) => {
        console.log(this.state.credits[e.target.id])
        this.setState({ 
            editing: !this.state.editing, 
            editingNum: parseInt(e.target.id)
            // sendingNum: 
            })
            console.log('here you go', this.state)
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state)
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
        console.log('WHAT ARE YOU ', this.state)
        
        apiPATCH.patchReim(this.state)
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => { throw(err) });
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
                            
                        <div className='gray-content-box'  >   
                            <div className="edit-pencil">
                                <i onClick={(e) => this.toggleEdit(e)} className="fa fa-pencil" aria-hidden="true"></i>
                            </div>

                            
                                    <div>
                                        <span className='line-spacing'>Author: {this.state.credits[this.state.editingNum].author} <br/></span>
                                     
                                        <label htmlFor="amount">Amount: </label>                            
                                        <input onChange={(e) => this.inputChangeHandler(e)} 
                                        name='amount' type='text' 
                                        placeholder={this.state.credits[this.state.editingNum].amount}/>

                                        <label htmlFor="description">Description: </label>                            
                                        <input onChange={(e) => this.inputChangeHandler(e)} 
                                        name='description' type='text' 
                                        placeholder={this.state.credits[this.state.editingNum].description}/>

                                    </div>
                               

                            <label htmlFor="status"></label>
                            <select onChange={(e) => this.inputChangeHandler(e)} name="status">
                                <option value="1">Pending</option>
                                <option value="2">Approved</option>                                 
                                <option value="3">Denied</option>
                            </select>
                        <button className='submit-btn' onClick={() => this.sendPatchCredit()}>Submit Changes</button>                    
                    </div>
                </span> ):(
              this.state.credits.map((each, i) => {
                  return(
                  <div className='gray-content-box'  >   

                    <div className="edit-pencil" key={each._id}>
                        <i id={i.toString()} 
                        onClick={(e) => this.toggleEdit(e)} 
                        className="fa fa-pencil" 
                        aria-hidden="true"></i>
                    </div>


                    <span className='line-spacing'>Author: {each.author} <br/></span>
                    <span className='line-spacing'>Amount: {each.amount} <br/></span>
                    <span className='line-spacing'>Amount: {each.description} <br/></span>
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