/**
 * Created by Eugene Krivsun on 26.11.2017.
 */
import React from 'react'

export default function Comment({comment}) {
    return (
        <li>
            <h3>{comment.user}</h3>
            <p>{comment.text}</p>
        </li>
    )
}