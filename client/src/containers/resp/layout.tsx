import React, { Component } from "react";
import { Backdrop, Burger,  Sidedrawer, Toolbar } from "../../components";
import { Loader, MQ } from "../../containers";
import './style.css';

interface IProps {
  children: any,
}

interface IState {
  sideDrawerOpen: boolean
}

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component<IProps, IState> {
  public constructor(props: IProps) {  
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
  }

  // animates sidedraw to close
  public sideDrawerToggle() {
    const toggle: boolean = !this.state.sideDrawerOpen
    const sd: any = document.getElementById('SD')
    if(this.state.sideDrawerOpen){
      sd.className += ' moveOut'
    setTimeout(() => {
      this.setState({ sideDrawerOpen: toggle })      
    }, 1000);
  } else {
    this.setState({ sideDrawerOpen: toggle })      
  }

  }

  public render() {
    return (
            <div className='Layout'>
              <MQ lowerLimit={600}>
                <Toolbar /> 
                <div className="after-nav"></div>
              </MQ>
              <MQ upperLimit={599}>
                {!this.state.sideDrawerOpen ?                  
                <div className='mobile-burger'><Burger size='2x' onClick={this.sideDrawerToggle}/></div> :
                <div onClick={this.sideDrawerToggle}><Sidedrawer/><Backdrop/></div>                            
                }
              </MQ>
              <div className='under-nav'>
                {this.props.children}
              </div>
              <div className='above-footer' />              
            </div>          
    );
  }
}

export default Loader(Layout);