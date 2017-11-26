import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.toggleOpen = this.toggleOpen.bind(this)
    }

    render() {
        const {isOpen} = this.state

        return (
            <div>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getComments()}
            </div>
        )
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getComments() {
        const {isOpen} = this.state
        const {comments} = this.props

        return (
            <ul>
                {isOpen && comments ? comments.map((comment) => <Comment key = {comment.id} comment = {comment} />) : null}
            </ul>
        )
    }
}