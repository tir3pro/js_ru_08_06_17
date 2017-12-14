/**
 * Created by Yevhen Kryvsun on 12/2/2017.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Filters from './Filters'
import 'react-select/dist/react-select.css';

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        return (
            <div>
                <UserForm />
                <Filters articles = {this.props.articles} />
                <ArticleList articles = {this.props.articles} />
                <ArticlesChart articles = {this.props.articles} />
            </div>
        )
    }

}

export default App
