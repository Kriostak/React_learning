import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrapperComponent, axios) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {

            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req;
            });

            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error: error
                })
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmHandler = () => {
            this.setState({
                error: null
            });
        };

        render() {
            return (
                <Wrapper>
                    <Modal 
                        show={this.state.error}
                        modalClosed={this.errorConfirmHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Wrapper>
            )
        }
    };
};

export default withErrorHandler;
