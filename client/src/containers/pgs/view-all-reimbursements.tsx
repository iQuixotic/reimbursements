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
            last_name: ''
        }]
        
    }
    

    componentWillMount = () => {
        apiGET.getAllCreditsByAuthor(1)
            .then(res => res.json())
            .then(res => this.setState({ credits: res }))
            .catch(err => { throw err })
    }

  // -----------------------------------
  public render() {
      return(
          <Layout {...this.state}>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>

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