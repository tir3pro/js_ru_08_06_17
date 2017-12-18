/**
 * Created by Yevhen Kryvsun on 12/18/2017.
 */
import {articles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (articlesState = defaultArticles, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE: return articlesState.filter(article => article.id !== payload.id)
    }

    return articlesState
}
