import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordeon from '../decorators/accordeon'

function ArticleList({articles, openArticleId, toggleOpenArticle}) {
    const articleElements = articles.map((article) => <li key = {article.id}>
        <Article
            article = {article}
            isOpen = {article.id === openArticleId}
            toggleOpen = {() => {
                toggleOpenArticle(article.id)
            }}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ]),
    toggleOpenArticle: React.PropTypes.func.isRequired
}

export default accordeon(ArticleList)