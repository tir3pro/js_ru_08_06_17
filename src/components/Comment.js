/**
 * Created by Eugene Krivsun on 26.11.2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {commentsSelectorFactory} from '../selectors'

function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b> by {comment.user}</b></p>
        </div>
    )
}

Comment.propTypes = {
    id: PropTypes.string.isRequired,
    //from connect
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = () => {
    const commentsSelector = commentsSelectorFactory();

    return (state, ownProps) => ({
        comment: commentsSelector(state, ownProps)
    })
}

export default connect(mapStateToProps)(Comment)