/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'

function Root(props) {
    return (
        <Provider store = {store}>
            <App {...props} />
        </Provider>
    )
}

export default Root