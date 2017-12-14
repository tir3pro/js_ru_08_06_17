import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './style.css'

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    /*constructor(props) {
        super(props)

        this.handleValidate = this.handleValidate.bind(this)
    }*/

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input type="text" value = {this.state.user} className = {this.getClassName('user')} onChange = {this.handleChange('user')} />
                comment: <input type="text" value = {this.state.text} className = {this.getClassName('text')} onChange = {this.handleChange('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    getClassName = type => {
        return this.state[type].length && this.state[type].length < limits[type].min ? 'form-input__error' : ''
    }

    handleChange = type => ev => {
        const value = ev.target.value

        if (value.length < limits[type].max) {
            this.setState({
                [type]: value
            })
        }
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default CommentForm;