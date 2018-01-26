import React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import styles from './Modal.css';

const Modal = (props) => {

    let displayModalClass = props.show ? styles.ShowModal: '';

    return (
        <Aux>
            <Backdrop show={props.show} hideBackdrop={props.hideBackdrop} />
            <div className={styles.Modal + ' ' + displayModalClass}>
                {props.children}
            </div>
        </Aux>
    );
}

export default Modal;