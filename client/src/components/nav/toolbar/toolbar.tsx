import * as React from "react";
import { NavItems } from '../../../components';
import './style.css';

const Toolbar = (props: any) => {
    return (
        <nav className='toolbar'>
            <div className="toolbar-main">
                Reimbursements
            </div>

            <div className="toolbar-nav">

                <NavItems
                    nav1="Login" link1='/'
                    nav2="Register" link2='/register'
                    nav3="Request Credits" link3='/requestCredit'
                    nav4="Users" link4='/list'
                    nav5="Find By" link5='/creditList/status/1'
                />
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;