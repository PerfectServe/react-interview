import * as React from 'react';
import {PostCommentsDisplay} from "./PostCommentsDisplay.tsx";


export class PostComments extends React.Component<any, any> {
    forceRerender = false

    constructor(props: any) {
        super(props)
        this.state = {
            postId: props.postId,
            comments: [],
            inProgressComment: ""
        }
    }

    fetchComments() {
        var _this = this

        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true)
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText)
                for (var i = 0; i < data.length; i++) {
                    _this.state.comments[i] = data[i];
                    if (_this.forceRerender) {
                        _this.forceUpdate()
                    }
                }
            }
        }
        xhr.send()
    }
    submitComment(email, body) {
        var _this = this

        var xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/comments', true)
        xhr.setRequestHeader('Content-Type', 'application/json')
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                _this.forceRerender = true
                _this.fetchComments()
                _this.state.comments.unshift({
                    id: null,
                    postId: null,
                    name: "Anonymous",
                    email: email,
                    body: body
                })
                _this.forceUpdate()  // Make sure new comment shows up
            }
        }
        xhr.send(`{"postId": ${this.state.postId}, "name": "Anonymous", "email": "${email}", "body": "${body}"}`);
    }

    componentDidMount() {
        this.forceRerender = true
        this.fetchComments()
    }

    render() {
        this.forceRerender = false  // Fix infinite loop
        this.fetchComments()
        return (
            <>
                <font size={5}><b>Comments</b></font>
                <br/>
                <br/>
                <br/>
                <textarea placeholder="Leave a comment" style={{width: "100%", height: "10em"}}
                          onChange={e => this.state.inProgressComment = e.currentTarget.value}/>
                <button onClick={e => {
                    this.submitComment.bind(this)(window.prompt("Enter your email"), this.state.inProgressComment)
                }}>
                    Submit Comment
                </button>
                <br/><br/>

                <PostCommentsDisplay comments={this.state.comments}/>
            </>
        )
    }
}
