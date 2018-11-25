import React, { Component } from 'react';
// import axios from 'axios';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {

    state = {
        selectedPostId: null,
        error: false
    }

    render () {
        console.log(this.props)
        return (
            <div className="Blog">
                <header>
                    <ul>
                        <li>
                            <NavLink to="/posts/" exact activeClassName="my-active" activeStyle={{"textDecoration": "underline"}}>Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink>
                        </li>
                    </ul>
                </header>

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                </Switch>
            </div>
        );
    }
    
}

export default Blog;