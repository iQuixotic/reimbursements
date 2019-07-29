import * as React from "react";
import { Layout } from '..';
import { apiPOST } from "api";

class RequestCreditPg extends React.Component{
    public state = {
        // _id: 60,
        author: 1, // should be from authdata login
        amount: 0,
        date_submitted: '',
        date_resolved: null,
        description: '',
        resolver: null,
        status: 1,
        type: 1
    }    

    // intParser = (e) => {
    //     this.inputChangeHandler(e)
    // }

    inputChangeHandler = (e) => {
        if(e.currentTarget.name === 'type' || e.currentTarget.name === 'amount') {
            this.setState({ [e.currentTarget.name]: parseInt(e.currentTarget.value)})
        } else {
            this.setState({
                [e.currentTarget.name]: e.currentTarget.value
            })
        }
        console.log(this.state)
    }

    setDateThenSubmit = () => {
        const d = new Date();
        const dformat = [d.getMonth()+1,
            d.getDate(),
            d.getFullYear()].join('/')+' '+
           [d.getHours(),
            d.getMinutes(),
            d.getSeconds()].join(':');

            console.log('this is the date I will send', dformat)
            this.setState({ date_submitted: dformat })
            this.registerSubmitHandler();
    }

    registerSubmitHandler = () => {
        apiPOST.submitNewReimbursement(this.state)
            .then(res => res.json())
            .then(res => console.log(res))
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

            <div className="login-inputs-div">
                {/* <label htmlFor="author">Author: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} name='author' type="text"/> */}

                <label htmlFor="email">Amount: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} name='amount' type="text"/>

                <label htmlFor="description">Description: </label>
                <input onChange={(e) => this.inputChangeHandler(e)} name='description' type="text"/>

                <select onChange={(e) => this.inputChangeHandler(e)} name="type" id="">
                    <option value="1">Lodging</option>
                    <option value="2">Travel</option>
                    <option value="3">Food</option>
                    <option value="4">Other</option>
                </select>

                <div className="login-and-register-btns">
                    <button onClick={() => this.setDateThenSubmit()}>Submit</button>
                </div>
            </div>

    </Layout>
      )
  }
}

export default RequestCreditPg;
