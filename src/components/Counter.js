/**
 * Created by Yevhen Kryvsun on 12/14/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number
    }

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.increment()
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment })(Counter)