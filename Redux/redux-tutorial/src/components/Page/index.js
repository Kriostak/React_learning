import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page extends Component {

    onYearBtnClick(e) {
        this.props.setYear(+e.target.textContent)
    }

    render() {
        const { year, photos } = this.props        
        return (
            <div className='user'>
                <div className='buttons'>
                    <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
                </div>
                <div className='user-info'>
                    <h3>{year} year.</h3>
                    <p>You have {photos.length} photos.</p>
                </div>
            </div>
        );
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};

export default Page