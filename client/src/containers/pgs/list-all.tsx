import * as React from "react";
import { Layout } from '..';
import { apiGET } from "../../api";
import { PaintedThing } from '../../assets';
import './style.css';

class ListAllPg extends React.Component{
    public state = {
        message: "Hello from the ListAll Page.",
        users: [{
            _id: '',
            username: '',
            password: ''
        }]
        
    }
    

    componentWillMount = () => {
        apiGET.getAllUsers()
            .then(res => res.json())
            .then(res => this.setState({ users: res }))
            .catch(err => { throw err })
    }

    getSingleUser = (e) => {
        apiGET.getSingleUser(e.currentTarget.value)
            .then(res => res.json())
            .then(res => console.log(res))
            // .then(res => this.setState({ users: res }))
            .catch(err => { throw err })
    }
  // -----------------------------------
  public render() {
      return(
          <Layout {...this.props} {...this.state}>
              Hello, I am the login !!!
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <img src={PaintedThing} alt=""/>
        {this.state.message}
        {this.state.users.map(each => {
            return (
                <div className='gray-content-box' key={each._id} >                
                    {/* <span className='line-spacing'>_id     : {each._id} <br/></span> */}
                    <span className='line-spacing'>Username: {each.username} <br/></span>
                    <span className='line-spacing'>Password: {each.password} </span>

                <div className='button-div'>
                    
                    <a {...this.props} href={`/employees/${each._id}`}>
                        <button value={each._id}
                        className='button1' 
                        onClick={this.getSingleUser}>
                            View User
                        </button>
                    </a>
                    
                    <button className='button2'>
                        View Expenses
                    </button>
                </div>
            </div> )
        })}

          </Layout>
      )
  }
}

export default ListAllPg;