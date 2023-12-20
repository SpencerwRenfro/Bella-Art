import React from 'react'
import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';


const Backdrop = (props) => {
    return(
    <div className={classes.backdrop}>
        <h1 className='bg-red-200'>BACKDROP</h1>
    </div>
    );

}

const ModalOverlay = (props) => {

    return (

    <div

    >
        {/* <div>{props.children}</div> */}
    </div>
    );
}
function Modal(props) {

    let portalElement = document.getElementById("modal");

    return (
        <Fragment>
            {/* {ReactDOM.createPortal(<Backdrop />, portalElement)} */}
            {/* {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement )} */}
        </Fragment>
    );
}

export default Modal