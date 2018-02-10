import React from 'react'
import { Route, Redirect, NavLink } from 'react-router-dom'

import CourseContainer from './courses/CourseContainer'
import * as dataCourses from '../data/courses'

const Courses = (props) => {
  console.log(props)
  return (
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
    
      <Route exact path={props.match.path} render={() => <Redirect  to={`${props.match.path}/html`} />} />
      <Route path={`${props.match.path}/html`} render={() => <CourseContainer data={dataCourses.HTMLCourses} />} />
      <Route path={`${props.match.path}/css`} render={() => <CourseContainer data={dataCourses.CSSCourses} />} />
      <Route path={`${props.match.path}/javascript`} render={() => <CourseContainer data={dataCourses.JSCourses} />} />

    </div>
  )
};

export default Courses;