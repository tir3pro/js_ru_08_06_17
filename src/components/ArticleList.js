import React, {Component} from 'react'
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

export default accordeon(ArticleList)