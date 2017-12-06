import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

function CommentList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'hide comments' : 'show comments'

    return (
        <div>
            <button onClick = {toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: React.PropTypes.array.isRequired,
    isOpen: React.PropTypes.bool.isRequired,
    toggleOpen: React.PropTypes.func.isRequired
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return <p>no comments yet</p>

    return (
        <ul>
            {comments.map((comment) => <li key = {comment.id}><Comment comment = {comment} /></li>)}
        </ul>
    )
}

export default toggleOpen(CommentList)