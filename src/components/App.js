/**
 * Created by Yevhen Kryvsun on 12/2/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };



    render() {
        return (
            <div>
                <UserForm />
                <ArticleList articles = {this.props.articles} />
                <ArticlesChart articles = {this.props.articles} />
            </div>
        )
    }
}

export default App
