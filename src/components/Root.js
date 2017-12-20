/**
 * Created by Yevhen Kryvsun on 12/20/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import App from './App'
import store from '../store'
import {Provider} from 'react-redux'

function Root() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}

Root.propTypes = {

}

export default Root