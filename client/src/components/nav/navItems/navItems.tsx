import * as React from "react";
import './style.css';
import { Authorize } from '../../../containers';

interface IProps {
    id?: string,
    nav1: string, link1: string,
    nav2?: string, link2?: string
    nav3?: string, link3?: string
    nav4?: string, link4?: string
    nav5?: string, link5?: string
}

const NavItems = (props: IProps) => {
    return (
        <ul id={props.id} className='nav-items'>
            <Authorize rolesAllowed={[1, 2, 3]}>
                <li  className='nav-items-LI'><a href={props.link1}>{props.nav1}</a></li>
            </Authorize>      

            <Authorize rolesAllowed={[1, 2, 3]}>
                <li  className='nav-items-LI'><a href={props.link2}>{props.nav2}</a></li>
            </Authorize>

            <Authorize rolesAllowed={[1, 2, 3]}>
                <li  className='nav-items-LI'><a href={props.link3}>{props.nav3}</a></li>  
            </Authorize>

            <Authorize rolesAllowed={[1, 2, 3]}>
                <li  className='nav-items-LI'><a href={props.link4}>{props.nav4}</a></li> 
            </Authorize>

            <Authorize rolesAllowed={[1, 2, 3]}>
                <li  className='nav-items-LI'><a href={props.link5}>{props.nav5}</a></li>
            </Authorize>                                 
        </ul>
    );
}

export default NavItems;