import * as React from 'react';


export class PostCommentsDisplay extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            comments: props.comments
        }
    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        for(var i = 0; i < this.props.comments.length; i++) {
            if(this.props.comments[i] !== prevProps.comments[i]) {
                this.state.comments[i] = this.props.comments[i]
            }
        }
    }

    render() {
        return (
        <div>
            <div>
            {this.state.comments.map((comment: any) => (
                <div style={{marginTop: "2em"}}>
                    <b>{comment.name} ({comment.email}):</b>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{comment.body}</div>
                </div>
            ))}
            </div>
        </div>
        )
    }
}