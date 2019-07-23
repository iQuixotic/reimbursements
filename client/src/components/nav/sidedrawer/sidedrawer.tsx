import * as React from "react";
// import { Logo, NavItems } from '../../../components';
import './style.css';

// will be used for mobile devices
const Sidedrawer = () => {
    return ( 
            <div id='SD' className='Sidedrawer' >
                <nav>
                    {/* <NavItems 
                    nav1="Accounts" link1='/' id='Sidedrawer_ul'
                    nav2="New" link2='/new'  
                    /> */}
                    {/* <Logo id='Sidedrawer-Logo'/> */}
                </nav>
            </div>
    );
}

export default Sidedrawer;