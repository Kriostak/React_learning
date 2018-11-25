import React, { Component } from 'react'
import axios from '../../../axios'
import { Route, Link } from 'react-router-dom'

import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

export default class Posts extends Component {

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.props.history.push({
            pathname: '/posts/' + id
        });
        // this.setState({
        //     selectedPostId: id
        // });
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map((item) => {
                return (
                        // <Link to={'/posts/' + item.id} key={item.id} >
                            <Post key={item.id} 
                                title={item.title} 
                                body={item.body} 
                                author={item.author}
                                clicked={() => this.postSelectedHandler(item.id)} />
                        // </Link>
                        )
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:postId"} component={FullPost} />
            </div>
        )
    }

    componentDidMount () {
        axios.get('/posts')
            .then((response) => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Dmitro'
                    }
                });
                this.setState({
                    posts: updatedPosts,
                    error: false
                });
            })
            .catch(error => {
                this.setState({
                    error: true
                })
            })
    }
}
