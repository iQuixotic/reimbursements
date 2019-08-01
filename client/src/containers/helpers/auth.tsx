import React, { Component } from 'react';
import { apiGET } from "api";

interface IProps {
    children: any,
    rolesAllowed: Array<Number>
}

interface IState {
    user?: any,
    role_id: number,
    isAuthorized: boolean
}

class Authorize extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            role_id: 3,
            isAuthorized: false
        }

        this.componentDidMount = () => {
            // const jwt = getjwt();
            // console.log(jwt)
            this.getRole();
           
            // console.log('THIS IS THE ARR AND THE STATE.ROLEID', arr, this.state.role_id)
        }
    }


    getRole = () => {
        apiGET.getRole()
            .then(res => res.json())
            .then(res => this.setState({ role_id: res.role_id }))
            .then(() => console.log(this.state))
            .then(() => this.compareAuth())
            .catch(err => { throw err })
    }

    compareAuth = () => {
        const arr: Array<any> =  this.props.rolesAllowed;
        if(arr.includes(this.state.role_id))  
            this.setState({ isAuthorized: true })
        else 
            this.setState({ isAuthorized: false })
    }

    
    render() {
        return(            
                this.state.isAuthorized ? (
                    <div >
                        {this.props.children}
                    </div>
                ) : (
                    <div></div>
                )
        )
    }

}

export default Authorize;