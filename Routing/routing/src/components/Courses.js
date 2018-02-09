import React from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'

import HTML from './courses/HTML'
import CSS from './courses/CSS'
import JavaScript from './courses/JavaScript'

const Courses = (props) => (
  <div className="main-content courses">

    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li>
          <NavLink to={`${props.match.url}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${props.match.url}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${props.match.url}/javascript`}>JavaScript</NavLink>
        </li>
      </ul>
    </div>
  
    <Route exact path={props.match.url} render={() => <Redirect  to={`${props.match.url}/html`} />} />
    <Route path={`${props.match.url}/html`} render={() => <HTML />} />
    <Route path={`${props.match.url}/css`} render={() => <CSS />} />
    <Route path={`${props.match.url}/javascript`} render={() => <JavaScript />} />

  </div>
);

export default Courses;