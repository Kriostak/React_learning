import React from 'react';

import styles from './Logo.css'
import burgerLogo from '../../assets/images/logo.png'


const Logo = (props) => {

    return (
        <div className={ styles.Logo }>
            <img src={ burgerLogo } alt="MyBurger" />
        </div>
    );

}

export default Logo;