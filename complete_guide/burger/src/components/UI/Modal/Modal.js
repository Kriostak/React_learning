import React, {Component} from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import styles from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate')
    }

    render() {
        let displayModalClass = this.props.show ? styles.ShowModal: '';

        return (
            <Aux>
                <Backdrop show={this.props.show} hideBackdrop={this.props.hideBackdrop} />
                <div className={styles.Modal + ' ' + displayModalClass}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;