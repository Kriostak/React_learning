import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import User from '../../components/User'
import Page from '../../components/Page'
import * as pageActions from '../../actions/pageActions'

import './style.css'

const mapStateToProps = (state) => {
  return {
    userState: state.user,
    pageState: state.page,
    fetchingState: state.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    pageActionsDispathched: bindActionCreators(pageActions, dispatch)
  }
}

class Main extends Component {
  render() {

    const {name} = this.props.userState
    const {year, photos} = this.props.pageState
    const {setYear} = this.props.pageActionsDispathched
    const fetching = this.props.fetchingState.fetching ? 'main loading': 'main'

    return (
      <div className={fetching}>
        <User name={name} />
        <Page photos={photos} year={year} setYear={setYear} />
      </div>
    )

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
