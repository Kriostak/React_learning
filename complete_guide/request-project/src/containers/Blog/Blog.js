import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map((item) => {
                return <Post 
                    title={item.title} 
                    body={item.body} 
                    key={item.id} 
                    author={item.author}
                    clicked={() => this.postSelectedHandler(item.id)} />
            })
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
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

export default Blog;