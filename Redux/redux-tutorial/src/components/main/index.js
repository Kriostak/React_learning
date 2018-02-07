import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  };
}

class Main extends Component {
  render() {

    const {name} = this.props.user
    const {year, photos} = this.props.page

    return (
      <div className='main'>
        <p>Hi from App, {name}!</p>
        <p>You have {photos.length} for {year} year.</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(Main);