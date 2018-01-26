import React from 'react';

import styles from './Button.css';

const Button = (props) => {

    return (
        <button 
            className={[styles.Btn, styles[props.btnType]].join(' ')} 
            onClick={props.clickMethod}>
                {props.children}
        </button>
    );

}

export default Button;