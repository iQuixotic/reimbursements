import * as React from "react";
// import { NavItems } from '../../../components';
import './style.css';

const Toolbar = (props: any) => {
    return (
        <nav className='Toolbar'>
            <div className="Toolbar-Main">
                Reimbursements
            </div>

            <div className="Toolbar-Nav">
                {/* <NavItems
                    nav1="Accounts" link1='/'
                    nav2="New" link2='/new'
                /> */}
            </div>
            {props.children}
        </nav>
    );
}

export default Toolbar;