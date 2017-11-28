/**
 * Created by Eugene Krivsun on 26.11.2017.
 */
import React from 'react'

export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.text} <b> by {comment.user}</b></p>
        </div>
    )
}