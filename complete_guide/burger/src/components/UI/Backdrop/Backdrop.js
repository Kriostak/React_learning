import React from 'react';

import styles from './Backdrop.css';

const Backdrop = (props) => {

    let showBackdrop = props.show ? styles.ShowBackdrop: '';

    return (
        <div className={styles.Backdrop + ' ' + showBackdrop} onClick={props.hideBackdrop} />
    );

}

export default Backdrop;