import React from "react";
import './style.css';

const BackDrop = (props: any) => {
    return(
        <div className='Backdrop'>
            {props.children}
        </div>
    );
}

export default BackDrop;