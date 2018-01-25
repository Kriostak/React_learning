import React, {Component} from 'react';

// const WithClassAnother = (WrapperComponent, className) => {

//     return (props) => {
//         return (
//             <div className={className}>
//                 <WrapperComponent {...props} />
//             </div>
//         );
//     }

// };

const WithClassAnother = (WrapperComponent, className) => {

    return class extends Component {

        render() {

            return (
                <div className={className}>
                    <WrapperComponent {...this.props} />
                </div>
            );
            
        }

    }

};

export default WithClassAnother;