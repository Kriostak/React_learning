import React from 'react';

import styles from './BuildControl.css';

const BuildControl = (props) => {

    return (
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} 
                onClick={props.onClickLess} 
                disabled={props.isDisabledLess}>Less</button>
            <button className={styles.More} 
            onClick={props.onClickMore}>More</button>
        </div>
    );

};

export default BuildControl;