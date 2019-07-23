import React from "react";
import { Icon } from 'react-fa';
import './style.css';

// hamburger (industry term) icon for opening sidedrawer
const Burger = (props: {size: any, onClick: any }) => {
    return(
    <div>
         <Icon name=" fa-bars" 
         size={props.size} 
         className='Hamburger' 
         onClick={props.onClick} />
    </div>
    );
}

export default Burger;