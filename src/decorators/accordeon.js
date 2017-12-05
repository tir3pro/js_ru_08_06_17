/**
 * Created by Yevhen Kryvsun on 12/5/2017.
 */
import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null
    }

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle.bind(this)} />
    }

    toggleOpenArticle(openArticleId) {
        if (this.state.openArticleId === openArticleId) {
            this.setState({openArticleId: null})
        } else {
            this.setState({openArticleId})
        }
    }
}