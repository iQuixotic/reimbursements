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
        idToLookFor: ''
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
              {this.state.credits.map(each => {
                  return(
                  <div className='gray-content-box' key={each._id} >    
                    <span className='line-spacing'>Author: {each.first_name} {each.last_name} <br/></span>
                    <span className='line-spacing'>Amount: {each.amount} <br/></span>
                    <span className='line-spacing'>Date Submitted: {each.date_submitted} <br/></span>
                    <span className='line-spacing'>Date Resolved: {each.date_resolved} <br/></span>
                    <span className='line-spacing'>Resolver: {each.resolver} <br/></span>
                    <span className='line-spacing'>Status: {each.status} <br/></span>
                    <span className='line-spacing'>Type: {each.type} <br/></span>

                  </div> )
              })}
          </Layout>
      )
  }
}

export default ViewAllReimPg;