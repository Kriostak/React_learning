import React, {Component} from 'react';

import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../../hoc/Wrapper';

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
            <Wrapper>
                <Backdrop show={this.props.show} hideBackdrop={this.props.hideBackdrop} />
                <div className={styles.Modal + ' ' + displayModalClass}>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }
}

export default Modal;