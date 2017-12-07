/**
 * Created by Yevhen Kryvsun on 12/5/2017.
 */
import React, {Component as ReactComponent} from 'react'

export default OriginalComponent => class Accordeon extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        return <OriginalComponent {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem} />
    }

    toggleOpenItem = (openItemId) => () => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}