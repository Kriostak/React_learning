import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        post: null
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.postId)
            .then((response) => {
                console.log(response)
            });
    }

    render () {

        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.postId) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{ this.state.post.title }</h1>
                    <p>{ this.state.post.body }</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.postId) {
            if (!this.state.post || this.state.post.id != this.props.match.params.postId) {
                axios.get('/posts/' + this.props.match.params.postId)
                    .then((response) => {
                        this.setState({
                            post: response.data
                        })
                    })
            }
        }
    }

}

export default FullPost;