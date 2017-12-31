import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordeon from '../decorators/accordeon'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordeon
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map((article) => <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => {
    const {articles, filters} = state
    const {selected, dateRange: {from, to}} = filters

    const filteredArtciles = articles.filter((article) => {
        const published = Date.parse(article.date)

        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })

    return {
        articles: filteredArtciles
    }
})(accordeon(ArticleList))